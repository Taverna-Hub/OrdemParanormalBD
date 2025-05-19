package edu.cesar.taverna.bd.OP.dao;

import edu.cesar.taverna.bd.OP.DTO.*;
import edu.cesar.taverna.bd.OP.config.ConnectionFactory;
import edu.cesar.taverna.bd.OP.entity.Mission;
import lombok.Data;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import static edu.cesar.taverna.bd.OP.config.ConnectionFactory.getConnection;

@Data
public class QGDAO{

    public UUID findQGIdByVerissimo(UUID verissimo_id) throws SQLException {
        String selectHQ = "SELECT id_hq FROM HQ WHERE id_verissimo = ?";

        try(Connection conn = getConnection();
            PreparedStatement stmt = conn.prepareStatement(selectHQ)) {
            stmt.setString(1, verissimo_id.toString());
            ResultSet rs = stmt.executeQuery();
            if (rs.next()) {
                return UUID.fromString(rs.getString("id_hq"));
                //return rs.getLong("id_hq");
            }
        }

        return null;
    }

    public List<TeamsSpecializationsInHQ> getSpecializationsInHQ(UUID id){
        List<TeamsSpecializationsInHQ> specializations = new ArrayList<>();

        String SQL =
                """
                SELECT T.specialization, COUNT(*) as quantity
                FROM HQ H
                 JOIN AGENTS_IN_HQ AH ON H.id_hq = AH.id_hq
                 JOIN AGENTS_IN_TEAM AT ON AH.id_agent = AT.id_agent
                 JOIN TEAM T ON AT.id_team = T.id_team
                WHERE H.id_hq = ?
                group by T.specialization;
                """;
        try (Connection conn = ConnectionFactory.getConnection();
             PreparedStatement stmt = conn.prepareStatement(SQL)) {
            stmt.setString(1, id.toString());

            try (ResultSet rs = stmt.executeQuery()) {
                while (rs.next()) {
                    String specialization = rs.getString("specialization");
                    int quantity = rs.getInt("quantity");
                    specializations.add(new TeamsSpecializationsInHQ(specialization, quantity));
                }
            }
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
        return specializations;
    }

    public List<MissionByStatusDTO> getMissionsByStatus(UUID id) {
        List<MissionByStatusDTO> missionsStatus = new ArrayList<>();

        String SQL = """
                SELECT m.status, COUNT(*) AS total
                FROM MISSION m
                JOIN HQ hq ON hq.id_hq = m.id_hq
                WHERE m.id_hq = ?
                GROUP BY m.status
                """;

        try (Connection conn = ConnectionFactory.getConnection();
             PreparedStatement stmt = conn.prepareStatement(SQL)) {
            stmt.setString(1, id.toString());

            try (ResultSet rs = stmt.executeQuery()) {
                while (rs.next()) {
                    String status = rs.getString("status");
                    int total = rs.getInt("total");
                    missionsStatus.add(new MissionByStatusDTO(status, total));
                }
            }
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }

        return missionsStatus;
    }

    public List<NexByHqDTO> getNexbyHQ(){
        List<NexByHqDTO> nexByHq = new ArrayList<>();

        String SQL =
                """
                Select h.name, AVG(a.nex) as nivel_de_exposição_medio
                FROM AGENTS a, HQ h, AGENTS_IN_HQ ahq
                where a.id_agent = ahq.id_agent and h.id_hq = ahq.id_hq
                GROUP BY h.name;
                """;
        try(Connection conn = ConnectionFactory.getConnection();
            PreparedStatement stmt = conn.prepareStatement(SQL);
            ResultSet rs = stmt.executeQuery()){
                while (rs.next()) {
                    int meanNext = rs.getInt("nivel_de_exposição_medio");
                    String HQ = rs.getString("name");
                    nexByHq.add(new NexByHqDTO(meanNext, HQ));
                }
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }

        return nexByHq;
    }


    public List<AgentsBySpecializationDTO> getSpecializationsAgents(UUID id_hq) {
        List<AgentsBySpecializationDTO> agentsSpecialization = new ArrayList<>();

        String SQL = """
                SELECT a.specialization, COUNT(*) AS total
                FROM AGENTS a
                JOIN AGENTS_IN_HQ ai ON a.id_agent = ai.id_agent
                WHERE ai.id_hq = ?
                GROUP BY a.specialization
            """;

        try (Connection conn = ConnectionFactory.getConnection();
             PreparedStatement stmt = conn.prepareStatement(SQL)) {
            stmt.setString(1, id_hq.toString());

            try (ResultSet rs = stmt.executeQuery()) {
                while (rs.next()) {
                    String specialization = rs.getString("specialization");
                    int total = rs.getInt("total");
                    agentsSpecialization.add(new AgentsBySpecializationDTO(specialization, total));
                }
            }
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }

        return agentsSpecialization;
    }

    public List<RankAgentsDTO> getRankAgentsByHQ(UUID id){
        List<RankAgentsDTO> rankList = new ArrayList<>();

        String SQL =
                """
                        SELECT a.name, (
                            SELECT COUNT(*)
                            FROM AGENTS_IN_TEAM ait
                                JOIN TEAM t ON ait.id_team = t.id_team
                                JOIN MISSION_ASSIGNMENT ma ON ma.id_team = t.id_team
                                JOIN MISSION m ON m.id_mission = ma.id_mission
                            WHERE ait.id_agent = a.id_agent
                            AND m.status = 'Concluida'
                            ) as missoes_concluidas
                        FROM AGENTS a
                            JOIN AGENTS_IN_HQ aq ON a.id_agent = aq.id_agent
                        WHERE aq.id_hq = ?
                        ORDER BY missoes_concluidas DESC
                        LIMIT 10;
                """;

        try(Connection conn = ConnectionFactory.getConnection();
            PreparedStatement stmt = conn.prepareStatement(SQL)){
            stmt.setString(1, id.toString());
            try(ResultSet rs = stmt.executeQuery()){
                while (rs.next()){

                    String name = rs.getString("name");
                    long count_missions = rs.getLong("missoes_concluidas");

                    rankList.add(new RankAgentsDTO(name, count_missions));
                }
            }

        } catch (SQLException e) {
            throw new RuntimeException(e);
        }

        return rankList;
    }

    public FinishedMissionDTO getFinishedMissions(UUID id, Integer month, Integer year) {
        String SQL =
                """
                   SELECT
                   hq.name AS hq_name,
                   COUNT(CASE WHEN m.status = 'Concluida' THEN 1 END) AS total_finished,
                   COUNT(CASE
                             WHEN m.status = 'Concluida'
                              AND MONTH(m.end_date) = ?
                              AND YEAR(m.end_date) = ?
                          THEN 1
                        END) AS total_finished_month
                   FROM MISSION m
                   JOIN HQ hq ON m.id_hq = hq.id_hq
                   WHERE m.id_hq = ?
                   GROUP BY hq.name;
               """;

        try (Connection conn = ConnectionFactory.getConnection();
             PreparedStatement stmt = conn.prepareStatement(SQL)) {
            stmt.setInt(1, month);
            stmt.setInt(2, year);
            stmt.setString(3, id.toString());

            ResultSet rs = stmt.executeQuery();
            if (rs.next()) {
                String hqName = rs.getString("hq_name");
                int totalFinished = rs.getInt("total_finished");
                int totalFinishedMonth = rs.getInt("total_finished_month");
                return new FinishedMissionDTO(hqName, totalFinished, totalFinishedMonth);
            } else {
                return new FinishedMissionDTO(null, 0, 0);
            }

        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }

    public ActiveAgentsDTO getActiveAgents(UUID id) {
        String SQL =
                """
                    SELECT COUNT(*) AS total_agents, SUM(CASE WHEN a.retired = FALSE THEN 1 ELSE 0 END) AS active_agents
                    FROM AGENTS a
                     JOIN AGENTS_IN_HQ ahq ON a.id_agent = ahq.id_agent
                    WHERE ahq.id_hq = ?
                """;

        try (Connection conn = ConnectionFactory.getConnection();
             PreparedStatement stmt = conn.prepareStatement(SQL)) {
            stmt.setString(1, id.toString());

            ResultSet rs = stmt.executeQuery();
            if (rs.next()) {
                int totalAgents = rs.getInt("total_agents");
                int activeAgents = rs.getInt("active_agents");
                return new ActiveAgentsDTO(totalAgents, activeAgents);
            } else {
                return new ActiveAgentsDTO(0, 0);
            }

        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }

    public OpenMissionsDTO getOpenMissions(UUID id) {
        String SQL =
                """
                SELECT hq.name AS hq_name, COUNT(*) AS open_missions
                FROM MISSION m
                JOIN HQ hq ON m.id_hq = hq.id_hq
                WHERE m.id_hq = ?
                  AND m.status = 'Concluida'
                GROUP BY hq.name;
                """;

        try (Connection conn = ConnectionFactory.getConnection();
             PreparedStatement stmt = conn.prepareStatement(SQL)) {
            stmt.setString(1, id.toString());

            ResultSet rs = stmt.executeQuery();
            if (rs.next()) {
                String hqName = rs.getString("hq_name");
                int total = rs.getInt("open_missions");
                return new OpenMissionsDTO(hqName, total);
            } else {
                return new OpenMissionsDTO(null, 0);
            }

        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }

    public MissionAvgDurationDTO getMissionAverageDuration(UUID id, int month, int year) {
        String SQL = "{CALL GET_AVG_MISSION_DURATION_BY_HQ_AND_DATE(?, ?, ?)}";

        try (Connection conn = ConnectionFactory.getConnection();
             CallableStatement stmt = conn.prepareCall(SQL)) {

            stmt.setString(1, id.toString());
            stmt.setInt(2, month);
            stmt.setInt(3, year);

            ResultSet rs = stmt.executeQuery();
            if (rs.next()) {
                String hqName = rs.getString("hq_name");
                double avgDuration = rs.getDouble("avg_duration_days");
                return new MissionAvgDurationDTO(hqName, avgDuration);
            } else {
                return new MissionAvgDurationDTO(null, 0.0);
            }

        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }

}

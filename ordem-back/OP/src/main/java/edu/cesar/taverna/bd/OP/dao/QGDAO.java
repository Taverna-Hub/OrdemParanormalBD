package edu.cesar.taverna.bd.OP.dao;

import edu.cesar.taverna.bd.OP.DTO.AgentByRanksDTO;
import edu.cesar.taverna.bd.OP.DTO.AgentsBySpecializationDTO;
import edu.cesar.taverna.bd.OP.DTO.MissionByStatusDTO;
import edu.cesar.taverna.bd.OP.DTO.NexByHqDTO;
import edu.cesar.taverna.bd.OP.DTO.TeamsSpecializationsInHQ;
import edu.cesar.taverna.bd.OP.config.ConnectionFactory;
import lombok.Data;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
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
}

package edu.cesar.taverna.bd.OP.dao;

import edu.cesar.taverna.bd.OP.DTO.AgentsBySpecializationDTO;
import edu.cesar.taverna.bd.OP.config.ConnectionFactory;
import edu.cesar.taverna.bd.OP.entity.Agent;
import edu.cesar.taverna.bd.OP.entity.Mission;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

public class MissionDAO extends GenericDAO<Mission>{

    @Override
    protected String getInsertSQL() {
        return "INSERT INTO MISSION (id_mission, title, status, risks, objective, start_date, end_date, id_address, id_hq)" +
                " VALUES (?, ? ,? ,?, ?, ?, ?, ?, ?)";
    }

    @Override
    protected String getSelectByIdSQL() {
        return "SELECT * FROM MISSION WHERE id_mission = ?";
    }

    @Override
    protected String getSelectAllSQL() {
        return "SELECT id_mission, title, status, risks, objective, start_date, end_date, id_address, id_hq FROM MISSION";
    }

    public List<Mission> getAllFromHQ(UUID id){
        List<Mission> missionList = new ArrayList<>();
        String SQL =
                """
                SELECT m.id_mission,
                 m.title,
                 m.status,
                 m.objective,
                 m.risks,
                 m.start_date,
                 m.end_date,
                 m.id_address,
                 m.id_hq
                FROM MISSION m
                WHERE m.id_hq = ?;
                """;

        try(Connection conn = ConnectionFactory.getConnection();
            PreparedStatement stmt = conn.prepareStatement(SQL)) {
            stmt.setString(1, id.toString());

            try(ResultSet rs = stmt.executeQuery()){
                while (rs.next()){
                    missionList.add(mapResultSetToEntity(rs));
                }
            }

            return missionList;

        } catch (SQLException e) {
            throw new RuntimeException("Erro na busca por missões do HQ: ", e);
        }


    }

    @Override
    protected String getDeleteSQL() {
        return "";
    }

    @Override
    protected String getUpdateSQL() {
        return "";
    }

    @Override
    protected void prepareInsert(PreparedStatement stmt, Mission mission) throws SQLException {
        stmt.setString(1, mission.getId_mission().toString());
        stmt.setString(2, mission.getTitle());
        stmt.setString(3, mission.getStatus());
        stmt.setString(4, mission.getRisks());
        stmt.setString(5, mission.getObjective());
        stmt.setDate(6, java.sql.Date.valueOf(mission.getStart_date()));
        stmt.setDate(7, mission.getEnd_date() != null ? java.sql.Date.valueOf(mission.getEnd_date()) : null);
        stmt.setString(8, mission.getId_address().toString());
        stmt.setString(9, mission.getId_hq().toString());
    }

    @Override
    protected void prepareUpdate(PreparedStatement stmt, Mission entity) throws SQLException {

    }

    @Override
    protected void prepareDelete(PreparedStatement stmt, Object id) throws SQLException {

    }

    @Override
    protected Mission mapResultSetToEntity(ResultSet rs) throws SQLException {
        Mission mission = new Mission();

        mission.setId_mission(UUID.fromString(rs.getString("id_mission")));
        mission.setStatus(rs.getString("status"));
        mission.setRisks(rs.getString("risks"));
        mission.setTitle(rs.getString("title"));
        mission.setObjective(rs.getString("objective"));
        mission.setStart_date(rs.getDate("start_date").toLocalDate());
        mission.setEnd_date(rs.getDate("end_date") != null ? rs.getDate("end_date").toLocalDate() : null);
        mission.setId_address(UUID.fromString(rs.getString("id_address")));
        mission.setId_hq(UUID.fromString(rs.getString("id_hq")));
        return mission;
    }

    public List<AgentsBySpecializationDTO> getAgentSpecializationMission(UUID id_hq, UUID id_mission) {
        List<AgentsBySpecializationDTO> agentsSpecialization = new ArrayList<>();

        String SQL = """
                SELECT a.specialization, COUNT(*) AS total
                FROM AGENTS a
                JOIN AGENTS_IN_HQ ai ON a.id_agent = ai.id_agent
                JOIN AGENTS_IN_TEAM at ON at.id_agent = a.id_agent
                JOIN MISSION_ASSIGNMENT ma ON ma.id_team = at.id_team 
                WHERE ai.id_hq = ? AND ma.id_mission = ?
                GROUP BY a.specialization
            """;

        try (Connection conn = ConnectionFactory.getConnection();
             PreparedStatement stmt = conn.prepareStatement(SQL)) {
            stmt.setString(1, id_hq.toString());
            stmt.setString(2, id_mission.toString());

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

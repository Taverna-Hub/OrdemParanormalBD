package edu.cesar.taverna.bd.OP.dao;

import edu.cesar.taverna.bd.OP.entity.Agent;
import edu.cesar.taverna.bd.OP.entity.Mission;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.UUID;

public class MissionDAO extends GenericDAO<Mission>{

    @Override
    protected String getInsertSQL() {
        return "INSERT INTO MISSION (id_mission, title, status, risks, objective, start_date, end_date, id_address)" +
                " VALUES (?, ? ,? ,?, ?, ?, ?, ?)";
    }

    @Override
    protected String getSelectByIdSQL() {
        return "SELECT * FROM MISSION WHERE id_mission = ?";
    }

    @Override
    protected String getSelectAllSQL() {
        return "SELECT id_mission, title, status, risks, objective, start_date, end_date, id_address FROM MISSION";
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
        return mission;
    }
}

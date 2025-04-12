package edu.cesar.taverna.bd.OP.dao;

import edu.cesar.taverna.bd.OP.entity.Mission;

import java.sql.PreparedStatement;
import java.sql.SQLException;

public class MissionDAO extends GenericDAO<Mission>{

    @Override
    protected String getInsertSQL() {
        return "INSERT INTO MISSION (id_mission, title, status, report, risks, objective, location)" +
                " VALUES (?, ? ,? ,?, ?, ?, ?)";
    }

    @Override
    protected void prepareInsert(PreparedStatement stmt, Mission mission) throws SQLException {
        stmt.setString(1, mission.getId_mission().toString());
        stmt.setString(2, mission.getTitle());
        stmt.setString(3, mission.getStatus());
        stmt.setString(4, mission.getReport());
        stmt.setString(5, mission.getRisks());
        stmt.setString(6, mission.getObjective());
        stmt.setString(7, mission.getLocation());
    }
}

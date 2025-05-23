package edu.cesar.taverna.bd.OP.dao;

import edu.cesar.taverna.bd.OP.entity.Agent;
import edu.cesar.taverna.bd.OP.entity.ThreatMission;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.UUID;

public class ThreatMissionDAO extends GenericDAO<ThreatMission> {
    @Override
    protected String getInsertSQL() {
        return "INSERT INTO THREAT_MISSION (id_mission, id_threat) VALUES (?, ?)";
    }

    @Override
    protected String getSelectByIdSQL() {
        return "SELECT * FROM THREAT_MISSION WHERE id_mission = ?";
    }

    @Override
    protected String getSelectAllSQL() {
        return "";
    }

    @Override
    protected String getDeleteSQL() {
        return "DELETE FROM THREAT_MISSION WHERE id_mission = ? AND id_threat = ?";
    }

    @Override
    protected String getUpdateSQL() {
        return "";
    }

    @Override
    protected void prepareInsert(PreparedStatement stmt, ThreatMission threatMission) throws SQLException {
        stmt.setString(1, threatMission.getId_mission().toString());
        stmt.setString(2, threatMission.getId_threat().toString());
    }

    @Override
    protected void prepareUpdate(PreparedStatement stmt, ThreatMission threatMission) throws SQLException {
        this.prepareInsert(stmt, threatMission);
    }

    @Override
    protected ThreatMission mapResultSetToEntity(ResultSet rs) throws SQLException {
        ThreatMission threatMission = new ThreatMission();

        threatMission.setId_mission(UUID.fromString(rs.getString("id_mission")));
        threatMission.setId_threat(UUID.fromString(rs.getString("id_threat")));

        return threatMission;
    }

}

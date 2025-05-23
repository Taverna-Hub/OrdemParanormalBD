package edu.cesar.taverna.bd.OP.dao;

import edu.cesar.taverna.bd.OP.entity.ThreatMission;
import edu.cesar.taverna.bd.OP.entity.ThreatNeutralization;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.UUID;

public class ThreatNeutralizationDAO extends GenericDAO<ThreatNeutralization> {
    @Override
    protected String getInsertSQL() {
        return "INSERT INTO THREAT_NEUTRALIZATION (id_mission, id_threat, id_team, method, result) VALUES (?, ?, ?, ?, ?)";
    }

    @Override
    protected String getSelectByIdSQL() {
        return "SELECT * FROM THREAT_NEUTRALIZATION WHERE id_mission = ?";
    }

    @Override
    protected String getSelectAllSQL() {
        return "";
    }

    @Override
    protected String getDeleteSQL() {
        return "DELETE FROM THREAT_NEUTRALIZATION WHERE id_mission = ? AND id_threat = ? AND id_team";
    }

    @Override
    protected String getUpdateSQL() {
        return "";
    }

    @Override
    protected void prepareInsert(PreparedStatement stmt, ThreatNeutralization threatMission) throws SQLException {
        stmt.setString(1, threatMission.getId_mission().toString());
        stmt.setString(2, threatMission.getId_threat().toString());
        stmt.setString(3, threatMission.getId_team().toString());
        stmt.setString(4, threatMission.getMethod());
        stmt.setString(5, threatMission.getResult());
    }

    @Override
    protected void prepareUpdate(PreparedStatement stmt, ThreatNeutralization threatMission) throws SQLException {
        this.prepareInsert(stmt, threatMission);
    }

    @Override
    protected ThreatNeutralization mapResultSetToEntity(ResultSet rs) throws SQLException {
        ThreatNeutralization threatNeutralization = new ThreatNeutralization();

        threatNeutralization.setId_mission(UUID.fromString(rs.getString("id_mission")));
        threatNeutralization.setId_threat(UUID.fromString(rs.getString("id_threat")));
        threatNeutralization.setId_team(UUID.fromString(rs.getString("id_team")));
        threatNeutralization.setMethod(rs.getString("method"));
        threatNeutralization.setResult(rs.getString("result"));

        return threatNeutralization;
    }

}

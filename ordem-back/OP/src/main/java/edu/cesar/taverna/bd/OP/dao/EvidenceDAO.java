package edu.cesar.taverna.bd.OP.dao;

import edu.cesar.taverna.bd.OP.config.ConnectionFactory;
import edu.cesar.taverna.bd.OP.entity.Evidence;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

public class EvidenceDAO extends GenericDAO<Evidence>{
    @Override
    protected String getInsertSQL() {
        return "INSERT INTO EVIDENCE (id_mission, origin, description, stability_level, id_evidence)"+
                " VALUES(?, ?, ?, ?, ?)";
    }

    @Override
    protected String getSelectByIdSQL() {
        return "SELECT * FROM EVIDENCE WHERE id_evidence = ?";
    }

    @Override
    protected String getSelectAllSQL() {
        return "";
    }

    public List<Evidence> getSelectByIdMission(UUID id) {
        String SQL = "SELECT * FROM EVIDENCE WHERE id_evidence = ?";
        List<Evidence> list = new ArrayList<>();
        try (Connection conn = ConnectionFactory.getConnection();
             PreparedStatement stmt = conn.prepareStatement(SQL)) {
            prepareSelectById(stmt, id);
            try (ResultSet rs = stmt.executeQuery()) {
                while (rs.next()) {
                     list.add(mapResultSetToEntity(rs));
                }
                return list;
            }

        } catch (SQLException e) {
            throw new RuntimeException("Error searching entity by ID", e);
        }
    }
    @Override
    protected String getDeleteSQL() {
        return "DELETE FROM EVIDENCE WHERE id_evidence = ?";
    }

    @Override
    protected String getUpdateSQL() {
        return "UPDATE EVIDENCE SET id_mission = ?, origin = ?, description = ?, stability_level = ? WHERE id_evidence = ?";
    }

    @Override
    protected void prepareInsert(PreparedStatement stmt, Evidence evidence) throws SQLException {
        stmt.setString(1, String.valueOf(evidence.getMission()));
        stmt.setString(2, evidence.getOrigin());
        stmt.setString(3, evidence.getDescription());
        stmt.setString(4, evidence.getStability_level());
        stmt.setString(5, String.valueOf(evidence.getId_evidence()));
    }

    @Override
    protected void prepareUpdate(PreparedStatement stmt, Evidence entity) throws SQLException {
        prepareInsert(stmt, entity);
    }

    @Override
    protected Evidence mapResultSetToEntity(ResultSet rs) throws SQLException {
        Evidence evidence = new Evidence();
        evidence.setId_evidence(UUID.fromString(rs.getString("id_evidence")));
        evidence.setOrigin(rs.getString("origin"));
        evidence.setDescription(rs.getString("description"));
        evidence.setStability_level(rs.getString("stability_level"));
        evidence.setMission(UUID.fromString(rs.getString("id_mission")));
        return evidence;
    }
}

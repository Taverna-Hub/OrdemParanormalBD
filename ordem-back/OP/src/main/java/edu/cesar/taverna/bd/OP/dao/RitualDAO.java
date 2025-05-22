package edu.cesar.taverna.bd.OP.dao;

import edu.cesar.taverna.bd.OP.entity.Ritual;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.UUID;

public class RitualDAO extends GenericDAO<Ritual> {
    @Override
    protected String getInsertSQL() {
        return "INSERT INTO RITUALS (name, description, requirements, risks, id_element) VALUES (?, ?, ?, ?, ?)";
    }

    @Override
    protected String getSelectByIdSQL() {
        return "SELECT * FROM RITUALS WHERE id_ritual = ?";
    }

    @Override
    protected String getSelectAllSQL() {
        return "SELECT * FROM RITUALS";
    }

    @Override
    protected String getDeleteSQL() {
        return "DELETE FROM RITUALS WHERE id_ritual = ?";
    }

    @Override
    protected String getUpdateSQL() {
        return "UPDATE RITUALS SET name = ?, description = ?, requirements = ?, risks = ?, id_element = ? WHERE id_ritual = ?";
    }

    @Override
    protected void prepareInsert(PreparedStatement stmt, Ritual ritual) throws SQLException {
        stmt.setString(1, ritual.getName());
        stmt.setString(2, ritual.getDescription());
        stmt.setString(3, ritual.getRequirements());
        stmt.setString(4, ritual.getRisks());
        stmt.setString(5, ritual.getId_element().toString());
    }

    @Override
    protected void prepareUpdate(PreparedStatement stmt, Ritual ritual) throws SQLException {
        this.prepareInsert(stmt, ritual);
    }


    @Override
    protected Ritual mapResultSetToEntity(ResultSet rs) throws SQLException {
        Ritual ritual = new Ritual();

        ritual.setId_ritual(UUID.fromString(rs.getString("id_ritual")));
        ritual.setName(rs.getString("name"));
        ritual.setDescription(rs.getString("description"));
        ritual.setRequirements(rs.getString("requirements"));
        ritual.setRisks(rs.getString("risks"));
        ritual.setId_element(UUID.fromString(rs.getString("id_element")));
        return ritual;
    }
}

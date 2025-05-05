package edu.cesar.taverna.bd.OP.dao;

import edu.cesar.taverna.bd.OP.entity.QG;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.UUID;

import static edu.cesar.taverna.bd.OP.config.ConnectionFactory.getConnection;

public class QGDAO extends GenericDAO<QG>{

    @Override
    protected String getInsertSQL() {
        return "INSERT INTO QG (id, name, security, location, sales_amount, verissimo_id) VALUES (?, ?, ?, ?, ?, ?)";
    }

    @Override
    protected String getSelectByIdSQL() {
        return "SELECT id, name, security, location, sales_amount, verissimo_id FROM QG WHERE id = ?";
    }

    @Override
    protected String getSelectAllSQL() {
        return "SELECT id, name, security, location, sales_amount, verissimo_id FROM QG";
    }

    @Override
    protected String getDeleteSQL() {
        return "DELETE FROM QG WHERE id = ?";
    }

    @Override
    protected String getUpdateSQL() {
        return "UPDATE QG SET name = ?, security = ?, location = ?, sales_amount = ?, verissimo_id = ? WHERE id = ?";
    }

    @Override
    protected void prepareInsert(PreparedStatement stmt, QG entity) throws SQLException {

    }

    @Override
    protected void prepareUpdate(PreparedStatement stmt, QG entity) throws SQLException {

    }

    @Override
    protected QG mapResultSetToEntity(ResultSet rs) throws SQLException {
        return null;
    }

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

}

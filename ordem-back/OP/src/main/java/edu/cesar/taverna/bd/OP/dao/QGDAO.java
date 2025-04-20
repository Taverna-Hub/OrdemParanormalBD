package edu.cesar.taverna.bd.OP.dao;

import edu.cesar.taverna.bd.OP.entity.Mission;
import edu.cesar.taverna.bd.OP.entity.QG;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

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


}

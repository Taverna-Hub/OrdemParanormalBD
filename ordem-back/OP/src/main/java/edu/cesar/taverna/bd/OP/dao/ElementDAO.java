package edu.cesar.taverna.bd.OP.dao;

import edu.cesar.taverna.bd.OP.entity.Element;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.UUID;

public class ElementDAO extends GenericDAO<Element>{
    @Override
    protected String getSelectByIdSQL() {
        return "SELECT * FROM ELEMENTS WHERE name = ?";
    }

    @Override
    protected String getSelectAllSQL() {
        return "SELECT * FROM ELEMENTS";
    }

    protected Element mapResultSetToEntity(ResultSet rs) throws SQLException {
        UUID id        = UUID.fromString(rs.getString("id_element"));
        String name    = rs.getString("name");
        String desc    = rs.getString("description");
        String advStr  = rs.getString("id_advantage");
        UUID advantage = advStr != null ? UUID.fromString(advStr) : null;

        return new Element(id, name, desc, advantage);

    }

    @Override
    protected String getDeleteSQL() {
        throw new UnsupportedOperationException("Delete not supported for Element");
    }

    @Override
    protected String getInsertSQL() {
        throw new UnsupportedOperationException("Insert not supported for Element");
    }

    @Override
    protected String getUpdateSQL() {
        throw new UnsupportedOperationException("Update not supported for Element");
    }

    @Override
    protected void prepareInsert(PreparedStatement stmt, Element entity) throws SQLException {
        throw new UnsupportedOperationException("Insert not supported for Element");
    }

    @Override
    protected void prepareUpdate(PreparedStatement stmt, Element entity) throws SQLException {
        throw new UnsupportedOperationException("Update not supported for Element");

    }


}

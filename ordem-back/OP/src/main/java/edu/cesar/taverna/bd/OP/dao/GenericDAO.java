package edu.cesar.taverna.bd.OP.dao;

import edu.cesar.taverna.bd.OP.config.ConnectionFactory;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

public abstract class GenericDAO<T> {


    protected abstract String getInsertSQL();

    protected abstract String getSelectByIdSQL();

    protected abstract String getSelectAllSQL();

    protected abstract String getDeleteSQL();

    protected abstract String getUpdateSQL();

    protected abstract void prepareInsert(PreparedStatement stmt, T entity) throws SQLException;

    protected abstract void prepareUpdate(PreparedStatement stmt, T entity) throws SQLException;


    protected abstract T mapResultSetToEntity(ResultSet rs) throws SQLException;

    public void save(T entity) {
        try (Connection conn = ConnectionFactory.getConnection();
             PreparedStatement stmt = conn.prepareStatement(getInsertSQL())) {
            prepareInsert(stmt, entity);
            stmt.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }

    }

    public T searchByID(Object id) {

        try (Connection conn = ConnectionFactory.getConnection();
             PreparedStatement stmt = conn.prepareStatement(getSelectByIdSQL())) {
            prepareSelectById(stmt, id);
            try (ResultSet rs = stmt.executeQuery()) {
                if (rs.next()) {
                    return mapResultSetToEntity(rs);
                }
                return null;
            }

        } catch (SQLException e) {
            throw new RuntimeException("Error searching entity by ID", e);
        }

    }

    public List<T> getAll() throws SQLException {

        List<T> entities = new ArrayList<>();

        try (Connection conn = ConnectionFactory.getConnection();
             PreparedStatement stmt = conn.prepareStatement(getSelectAllSQL());
             ResultSet rs = stmt.executeQuery()) {

            while (rs.next()) {
                entities.add(mapResultSetToEntity(rs));
            }

            return entities;
        } catch (SQLException e) {
            throw new RuntimeException("Error getting all entities", e);
        }
    }

    public void delete(Object id) {
        try (Connection conn = ConnectionFactory.getConnection();
             PreparedStatement stmt = conn.prepareStatement(getDeleteSQL())) {
            prepareDelete(stmt, id);
            stmt.executeUpdate();
        } catch (SQLException e) {
            throw new RuntimeException("Error deleting entity", e);
        }
    }

    public void update(T entity) {
        try (Connection conn = ConnectionFactory.getConnection();
             PreparedStatement stmt = conn.prepareStatement(getUpdateSQL())) {
            prepareUpdate(stmt, entity);
            stmt.executeUpdate();
        } catch (SQLException e) {
            throw new RuntimeException("Error updating entity", e);
        }


    }

    protected void prepareDelete(PreparedStatement stmt, Object id) throws SQLException {
        if (id instanceof UUID) {
            stmt.setString(1, id.toString());
        }

    }

    protected void prepareSelectById(PreparedStatement stmt, Object id) throws SQLException {
        if (id instanceof UUID) {
            stmt.setString(1, id.toString());
        }
    }

}




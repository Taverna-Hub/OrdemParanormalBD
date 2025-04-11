package edu.cesar.taverna.bd.OP.dao;

import edu.cesar.taverna.bd.OP.config.ConnectionFactory;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public abstract class GenericDAO<T> {
    protected abstract String getInsertSQL();
    protected abstract void prepareInsert(PreparedStatement stmt, T entity) throws SQLException;

    public void save(T entity){
        try(Connection conn = ConnectionFactory.getConnection();
        PreparedStatement stmt = conn.prepareStatement(getInsertSQL())){
            System.out.println("ta no generico");
            prepareInsert(stmt, entity);
            stmt.executeUpdate();
        }catch (SQLException e){
            e.printStackTrace();
        }

    }
}


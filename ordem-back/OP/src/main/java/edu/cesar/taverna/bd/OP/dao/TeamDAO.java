package edu.cesar.taverna.bd.OP.dao;

import edu.cesar.taverna.bd.OP.entity.Agent;
import edu.cesar.taverna.bd.OP.entity.Team;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class TeamDAO extends GenericDAO<Team>{

    @Override
    protected String getInsertSQL() {
        return "INSERT INTO TEAM (id_team, name, specialization)" +
                " VALUES (?, ?, ?)";
    }

    @Override
    protected String getSelectByIdSQL() {
        return "";
    }

    @Override
    protected String getSelectAllSQL() {
        return "";
    }

    @Override
    protected String getDeleteSQL() {
        return "";
    }

    @Override
    protected String getUpdateSQL() {
        return "";
    }

    @Override
    protected void prepareInsert(PreparedStatement stmt, Team team) throws SQLException {

        stmt.setString(1, team.getId_team().toString());
        stmt.setString(2, team.getName());
        stmt.setString(3, team.getSpecialization());

    }

    @Override
    protected void prepareUpdate(PreparedStatement stmt, Team entity) throws SQLException {

    }

    @Override
    protected void prepareDelete(PreparedStatement stmt, Object id) throws SQLException {

    }

    @Override
    protected void prepareSelectById(PreparedStatement stmt, Object id) throws SQLException {

    }

    @Override
    protected Team mapResultSetToEntity(ResultSet rs) throws SQLException {
        return null;
    }

    protected void addAgentToTeam(Agent agent, Team team){
        return;
    }
}

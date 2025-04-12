package edu.cesar.taverna.bd.OP.dao;

import edu.cesar.taverna.bd.OP.entity.Team;

import java.sql.PreparedStatement;
import java.sql.SQLException;

public class TeamDAO extends GenericDAO<Team>{

    @Override
    protected String getInsertSQL() {
        return "INSERT INTO TEAM (id_team, name, specialization)" +
                " VALUES (?, ?, ?)";
    }

    @Override
    protected void prepareInsert(PreparedStatement stmt, Team team) throws SQLException {

        stmt.setString(1, team.getId_team().toString());
        stmt.setString(2, team.getName());
        stmt.setString(3, team.getSpecialization());

    }
}

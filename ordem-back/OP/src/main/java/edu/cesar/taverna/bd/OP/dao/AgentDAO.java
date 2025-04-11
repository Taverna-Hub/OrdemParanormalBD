package edu.cesar.taverna.bd.OP.dao;

import edu.cesar.taverna.bd.OP.config.ConnectionFactory;
import edu.cesar.taverna.bd.OP.entity.Agent;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class AgentDAO extends GenericDAO<Agent> {

    @Override
    protected String getInsertSQL() {
        System.out.println("agente no get Insert");
        return "INSERT INTO AGENTS (id_agent, name, birth_date, phone, address, rank_agent, nex, retired, transcended, specialization)" +
                " VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    }

    @Override
    protected void prepareInsert(PreparedStatement stmt, Agent agent) throws SQLException {
        System.out.println("agente no Prepare Insert");
        stmt.setString(1, agent.getId().toString());
        stmt.setString(2, agent.getName());
        stmt.setDate(3, java.sql.Date.valueOf(agent.getBirthDate()));
        stmt.setString(4, agent.getTelNumber());
        stmt.setString(5, agent.getAndress());
        stmt.setString(6, agent.getRank_agent());
        stmt.setInt(7, agent.getNex());
        stmt.setBoolean(8, agent.isRetired());
        stmt.setBoolean(9, agent.isTranscended());
        stmt.setString(10, agent.getSpecialization());
    }

}

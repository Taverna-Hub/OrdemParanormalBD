package edu.cesar.taverna.bd.OP.dao;

import edu.cesar.taverna.bd.OP.entity.Agent;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.UUID;

public class AgentDAO extends GenericDAO<Agent> {

    @Override
    protected String getInsertSQL() {
        return "INSERT INTO AGENTS (name, birth_date, phone, address, rank_agent, nex, retired, transcended, specialization, id_agent) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    }

    @Override
    protected String getSelectByIdSQL() {
        return "SELECT id_agent, name, birth_date, phone, address, rank_agent, nex, retired, transcended, specialization FROM AGENTS WHERE id_agent = ?";
    }

    @Override
    protected String getSelectAllSQL() {
        return "SELECT id_agent, name, birth_date, phone, address, rank_agent, nex, retired, transcended, specialization FROM AGENTS";
    }

    @Override
    protected String getDeleteSQL() {
        return "DELETE FROM AGENTS WHERE id_agent = ?";
    }

    @Override
    protected String getUpdateSQL() {
        return "UPDATE AGENTS SET name = ?, birth_date = ?, phone = ?, address = ?, rank_agent = ?, nex = ?, retired = ?, transcended = ?, specialization = ? WHERE id_agent = ?";
    }

    @Override
    protected void prepareInsert(PreparedStatement stmt, Agent agent) throws SQLException {
        stmt.setString(1, agent.getName());
        stmt.setDate(2, java.sql.Date.valueOf(agent.getBirthDate()));
        stmt.setString(3, agent.getTelNumber());
        stmt.setString(4, agent.getAndress());
        stmt.setString(5, agent.getRank_agent());
        stmt.setInt(6, agent.getNex());
        stmt.setBoolean(7, agent.isRetired());
        stmt.setBoolean(8, agent.isTranscended());
        stmt.setString(9, agent.getSpecialization());

        stmt.setString(10, agent.getId().toString());
    }

    @Override
    protected void prepareUpdate(PreparedStatement stmt, Agent agent) throws SQLException {
        stmt.setString(1, agent.getName());
        stmt.setDate(2, java.sql.Date.valueOf(agent.getBirthDate()));
        stmt.setString(3, agent.getTelNumber());
        stmt.setString(4, agent.getAndress());
        stmt.setString(5, agent.getRank_agent());
        stmt.setInt(6, agent.getNex());
        stmt.setBoolean(7, agent.isRetired());
        stmt.setBoolean(8, agent.isTranscended());
        stmt.setString(9, agent.getSpecialization());

        stmt.setString(10, agent.getId().toString());
    }

    @Override
    protected void prepareDelete(PreparedStatement stmt, Object id) throws SQLException {
        if (id instanceof UUID) {
            stmt.setString(1, id.toString());
        } else {
            stmt.setString(1, id.toString());
        }
    }

    @Override
    protected void prepareSelectById(PreparedStatement stmt, Object id) throws SQLException {
        if (id instanceof UUID) {
            stmt.setString(1, id.toString());
        } else {
            stmt.setString(1, id.toString());
        }
    }

    @Override
    protected Agent mapResultSetToEntity(ResultSet rs) throws SQLException {
        Agent agent = new Agent();

        agent.setId(UUID.fromString(rs.getString("id_agent")));
        agent.setName(rs.getString("name"));
        agent.setBirthDate(rs.getDate("birth_date").toLocalDate());
        agent.setTelNumber(rs.getString("phone"));
        agent.setAndress(rs.getString("address"));
        agent.setRank_agent(rs.getString("rank_agent"));
        agent.setNex(rs.getInt("nex"));
        agent.setRetired(rs.getBoolean("retired"));
        agent.setTranscended(rs.getBoolean("transcended"));
        agent.setSpecialization(rs.getString("specialization"));
        return agent;
    }
}
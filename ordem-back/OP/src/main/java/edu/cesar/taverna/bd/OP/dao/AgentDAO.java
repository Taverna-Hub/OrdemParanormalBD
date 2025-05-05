package edu.cesar.taverna.bd.OP.dao;

import edu.cesar.taverna.bd.OP.config.ConnectionFactory;
import edu.cesar.taverna.bd.OP.entity.Agent;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

public class AgentDAO extends GenericDAO<Agent> {

    @Override
    protected String getInsertSQL() {
        return "INSERT INTO AGENTS (name, birth_date, phone, rank_agent, nex, retired, transcended, specialization, id_agent) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
    }

    @Override
    protected String getSelectByIdSQL() {
        return "SELECT id_agent, name, birth_date, phone, rank_agent, nex, retired, transcended, specialization FROM AGENTS WHERE id_agent = ?";
    }

    @Override
    protected String getSelectAllSQL() {
        return "SELECT id_agent, name, birth_date, phone, rank_agent, nex, retired, transcended, specialization FROM AGENTS";
    }

    @Override
    protected String getDeleteSQL() {
        return "DELETE FROM AGENTS WHERE id_agent = ?";
    }

    @Override
    protected String getUpdateSQL() {
        return "UPDATE AGENTS SET name = ?, birth_date = ?, phone = ?, rank_agent = ?, nex = ?, retired = ?, transcended = ?, specialization = ? WHERE id_agent = ?";
    }

    @Override
    protected void prepareInsert(PreparedStatement stmt, Agent agent) throws SQLException {
        stmt.setString(1, agent.getName());
        stmt.setDate(2, java.sql.Date.valueOf(agent.getBirthDate()));
        stmt.setString(3, agent.getTelNumber());
        stmt.setString(4, agent.getRank_agent());
        stmt.setInt(5, agent.getNex());
        stmt.setBoolean(6, agent.isRetired());
        stmt.setBoolean(7, agent.isTranscended());
        stmt.setString(8, agent.getSpecialization());
        stmt.setString(9, agent.getId().toString());
    }

    @Override
    protected void prepareUpdate(PreparedStatement stmt, Agent agent) throws SQLException {
        this.prepareInsert(stmt, agent);
    }


    @Override
    protected Agent mapResultSetToEntity(ResultSet rs) throws SQLException {
        Agent agent = new Agent();

        agent.setId(UUID.fromString(rs.getString("id_agent")));
        agent.setName(rs.getString("name"));
        agent.setBirthDate(rs.getDate("birth_date").toLocalDate());
        agent.setTelNumber(rs.getString("phone"));
        agent.setRank_agent(rs.getString("rank_agent"));
        agent.setNex(rs.getInt("nex"));
        agent.setRetired(rs.getBoolean("retired"));
        agent.setTranscended(rs.getBoolean("transcended"));
        agent.setSpecialization(rs.getString("specialization"));
        return agent;
    }

    public List<Agent> findByHQ(UUID id_hq) throws SQLException {
        String getID = """
                SELECT a.id_agent,
                       a.name,
                       a.birth_date,
                       a.phone,
                       a.rank_agent,
                       a.nex,
                       a.retired,
                       a.transcended,
                       a.specialization
                FROM AGENTS a
                JOIN AGENTS_IN_HQ ai
                    ON a.id_agent = ai.id_agent
                WHERE ai.id_hq = ?
                """;

        List<Agent> list = new ArrayList<>();
        try (Connection conn = ConnectionFactory.getConnection();
             PreparedStatement stmt = conn.prepareStatement(getID)) {
            stmt.setString(1, id_hq.toString());

            try (ResultSet rs = stmt.executeQuery()) {
                while (rs.next()) {
                    Agent agent = mapResultSetToEntity(rs);
                    list.add(agent);
                }
            }
        }
        return list;
    }

}
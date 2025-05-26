package edu.cesar.taverna.bd.OP.dao;

import edu.cesar.taverna.bd.OP.DTO.AgentByRanksDTO;
import edu.cesar.taverna.bd.OP.DTO.AgentDTO;
import edu.cesar.taverna.bd.OP.config.ConnectionFactory;
import edu.cesar.taverna.bd.OP.entity.Agent;
import edu.cesar.taverna.bd.OP.entity.AgentRitual;
import edu.cesar.taverna.bd.OP.entity.Ritual;
import org.hibernate.annotations.processing.SQL;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
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

    public List<AgentByRanksDTO> getRankAgents(UUID id_hq) throws SQLException {
        List<AgentByRanksDTO> agentsRank = new ArrayList<>();

        String getID = """
                SELECT a.rank_agent, COUNT(*) AS total_agents
                FROM AGENTS a
                JOIN AGENTS_IN_HQ ai ON a.id_agent = ai.id_agent
                WHERE ai.id_hq = ?
                GROUP BY a.rank_agent
            """;

        try (Connection conn = ConnectionFactory.getConnection();
             PreparedStatement stmt = conn.prepareStatement(getID)) {
            stmt.setString(1, id_hq.toString());

            try (ResultSet rs = stmt.executeQuery()) {
                while (rs.next()) {
                    String rank = rs.getString("rank_agent");
                    int total = rs.getInt("total_agents");
                    agentsRank.add(new AgentByRanksDTO(rank, total));
                }
            }
        }


        return agentsRank;
    }

    public AgentDTO searchByIDWithRitual(UUID id) throws SQLException {
        Agent agent = null;
        List<Ritual> rituals = new ArrayList<>();

        String sql = """
            SELECT *
            FROM AGENTS a
            LEFT JOIN AGENT_RITUALS at2 ON at2.id_agent = a.id_agent
            LEFT JOIN RITUALS r ON r.id_ritual = at2.id_ritual
            WHERE a.id_agent = ?
        """;

        try (Connection conn = ConnectionFactory.getConnection();
             PreparedStatement stmt = conn.prepareStatement(sql)) {

            stmt.setString(1, id.toString());

            try (ResultSet rs = stmt.executeQuery()) {

                while (rs.next()) {
                    if (agent == null) {
                        agent = new Agent();
                        agent.setId(UUID.fromString(rs.getString("id_agent")));
                        agent.setName(rs.getString("name"));
                        agent.setBirthDate(rs.getDate("birth_date").toLocalDate());
                        agent.setTelNumber(rs.getString("phone"));
                        agent.setRank_agent(rs.getString("rank_agent"));
                        agent.setNex(rs.getInt("nex"));
                        agent.setRetired(rs.getBoolean("retired"));
                        agent.setTranscended(rs.getBoolean("transcended"));
                        agent.setSpecialization(rs.getString("specialization"));
                    }

                    String ritualIdStr = rs.getString("id_ritual");
                    if (ritualIdStr != null) {
                        Ritual ritual = new Ritual();
                        ritual.setId_ritual(UUID.fromString(ritualIdStr));
                        ritual.setName(rs.getString("r.name"));
                        ritual.setDescription(rs.getString("description"));
                        ritual.setRequirements(rs.getString("requirements"));
                        ritual.setRisks(rs.getString("risks"));
                        ritual.setId_element(rs.getString("id_element") != null ? UUID.fromString(rs.getString("id_element")) : null);
                        rituals.add(ritual);
                    }
                }

                if (agent != null) {
                    return new AgentDTO(agent, rituals);
                }
            }
        }

        return null;
    }

    public void addRitualToAgent(UUID id_agent, UUID id_ritual) throws SQLException {
        String sql = "INSERT INTO AGENT_RITUALS (id_agent, id_ritual) VALUES (?, ?)";

        try (Connection conn = ConnectionFactory.getConnection();
             PreparedStatement stmt = conn.prepareStatement(sql)) {

            stmt.setString(1, id_agent.toString());
            stmt.setString(2, id_ritual.toString());

            stmt.executeUpdate();
        }
    }

    public void insertAgentHQ (UUID id_agent, UUID id_hq) {
        String sql = "INSERT INTO AGENTS_IN_HQ (id_hq, id_agent) VALUES (?, ?)";

        try (Connection conn = ConnectionFactory.getConnection();
            PreparedStatement stmt = conn.prepareStatement(sql)) {

            stmt.setString(1, id_hq.toString());
            stmt.setString(2, id_agent.toString());

            stmt.executeUpdate();
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }
}
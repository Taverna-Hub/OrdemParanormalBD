package edu.cesar.taverna.bd.OP.dao;

import edu.cesar.taverna.bd.OP.config.ConnectionFactory;
import edu.cesar.taverna.bd.OP.entity.Agent;
import edu.cesar.taverna.bd.OP.entity.Team;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

public class TeamDAO extends GenericDAO<Team> {

    @Override
    protected String getInsertSQL() {
        // Insere o time na tabela TEAM
        return "INSERT INTO TEAM (id_team, name, specialization) VALUES (?, ?, ?)";
    }

    @Override
    protected String getSelectByIdSQL() {
        return "SELECT id_team, name, specialization FROM TEAM WHERE id_team = ?";
    }

    @Override
    protected String getSelectAllSQL() {
        return "SELECT id_team, name, specialization FROM TEAM";
    }

    @Override
    protected String getDeleteSQL() {
        return "DELETE FROM TEAM WHERE id_team = ?";
    }

    @Override
    protected String getUpdateSQL() {
        return "UPDATE TEAM SET name = ?, specialization = ? WHERE id_team = ?";
    }

    @Override
    protected void prepareInsert(PreparedStatement stmt, Team team) throws SQLException {
        stmt.setString(1, team.getId_team().toString());
        stmt.setString(2, team.getName());
        stmt.setString(3, team.getSpecialization());
    }

    @Override
    protected void prepareUpdate(PreparedStatement stmt, Team team) throws SQLException {
        stmt.setString(1, team.getName());
        stmt.setString(2, team.getSpecialization());
        stmt.setString(3, team.getId_team().toString());
    }

    @Override
    protected Team mapResultSetToEntity(ResultSet rs) throws SQLException {
        Team team = new Team();
        team.setId_team(UUID.fromString(rs.getString("id_team")));
        team.setName(rs.getString("name"));
        team.setSpecialization(rs.getString("specialization"));
        return team;
    }

    /**
     * Salva um time e associa agentes a ele em transação.
     */
    public void saveWithAgents(Team team, List<UUID> agentIds) {
        String insertTeamSql = getInsertSQL();
        String insertLinkSql = "INSERT INTO AGENTS_IN_TEAM (id_team, id_agent) VALUES (?, ?)";

        try (Connection conn = ConnectionFactory.getConnection()) {
            conn.setAutoCommit(false);
            try (PreparedStatement teamStmt = conn.prepareStatement(insertTeamSql)) {
                // Insere o time
                prepareInsert(teamStmt, team);
                teamStmt.executeUpdate();
            }

            if (agentIds != null && !agentIds.isEmpty()) {
                try (PreparedStatement linkStmt = conn.prepareStatement(insertLinkSql)) {
                    for (UUID agentId : agentIds) {
                        linkStmt.setString(1, team.getId_team().toString());
                        linkStmt.setString(2, agentId.toString());
                        linkStmt.addBatch();
                    }
                    linkStmt.executeBatch();
                }
            }
            conn.commit();
        } catch (SQLException e) {
            throw new RuntimeException("Erro ao salvar time com agentes", e);
        }
    }

    /**
     * Adiciona agentes a um time existente.
     */
    public void addAgentsToTeam(UUID teamId, List<UUID> agentIds) {
        String sql = "INSERT INTO AGENTS_IN_TEAM (id_team, id_agent) VALUES (?, ?)";
        try (Connection conn = ConnectionFactory.getConnection();
             PreparedStatement stmt = conn.prepareStatement(sql)) {
            conn.setAutoCommit(false);
            for (UUID agentId : agentIds) {
                stmt.setString(1, teamId.toString());
                stmt.setString(2, agentId.toString());
                stmt.addBatch();
            }
            stmt.executeBatch();
            conn.commit();
        } catch (SQLException e) {
            throw new RuntimeException("Erro ao adicionar agentes ao time", e);
        }
    }

    /**
     * Remove todos os agentes de um time.
     */
    public void removeAllAgentsFromTeam(UUID teamId) {
        String sql = "DELETE FROM AGENTS_IN_TEAM WHERE id_team = ?";
        try (Connection conn = ConnectionFactory.getConnection();
             PreparedStatement stmt = conn.prepareStatement(sql)) {
            stmt.setString(1, teamId.toString());
            stmt.executeUpdate();
        } catch (SQLException e) {
            throw new RuntimeException("Erro ao remover agentes do time", e);
        }
    }

    /**
     * Remove um agente específico de um time.
     */
    public void removeAgentFromTeam(UUID teamId, UUID agentId) {
        String sql = "DELETE FROM AGENTS_IN_TEAM WHERE id_team = ? AND id_agent = ?";
        try (Connection conn = ConnectionFactory.getConnection();
             PreparedStatement stmt = conn.prepareStatement(sql)) {
            stmt.setString(1, teamId.toString());
            stmt.setString(2, agentId.toString());
            stmt.executeUpdate();
        } catch (SQLException e) {
            throw new RuntimeException("Erro ao remover agente do time", e);
        }
    }

    /**
     * Busca todos os agentes associados a um time.
     */
    public List<Agent> getAgentsByTeam(UUID teamId) {
        String sql = "SELECT a.id_agent, a.name, a.birth_date, a.phone, " +
                "a.specialization, a.rank_agent, a.nex, a.retired, a.transcended " +
                "FROM AGENTS a " +
                "JOIN AGENTS_IN_TEAM at ON a.id_agent = at.id_agent " +
                "WHERE at.id_team = ?";
        List<Agent> agents = new ArrayList<>();
        try (Connection conn = ConnectionFactory.getConnection();
             PreparedStatement stmt = conn.prepareStatement(sql)) {
            stmt.setString(1, teamId.toString());
            try (ResultSet rs = stmt.executeQuery()) {
                while (rs.next()) {
                    Agent agent = new Agent();
                    agent.setId(UUID.fromString(rs.getString("id_agent")));
                    agent.setName(rs.getString("name"));
                    agent.setBirthDate(rs.getDate("birth_date").toLocalDate());
                    agent.setTelNumber(rs.getString("phone"));
                    agent.setSpecialization(rs.getString("specialization"));
                    agent.setRank_agent(rs.getString("rank_agent"));
                    agent.setNex(rs.getInt("nex"));
                    agent.setRetired(rs.getBoolean("retired"));
                    agent.setTranscended(rs.getBoolean("transcended"));
                    agents.add(agent);
                }
            }
            return agents;
        } catch (SQLException e) {
            throw new RuntimeException("Erro ao obter agentes do time", e);
        }
    }
}

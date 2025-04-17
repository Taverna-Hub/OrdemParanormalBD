package edu.cesar.taverna.bd.OP.services;

import edu.cesar.taverna.bd.OP.dao.TeamDAO;
import edu.cesar.taverna.bd.OP.entity.Agent;
import edu.cesar.taverna.bd.OP.entity.Team;

import java.sql.SQLException;
import java.util.List;
import java.util.UUID;

public class TeamService {
    private final TeamDAO teamDAO = new TeamDAO();

    public void createTeamWithAgents(Team team, List<UUID> agentIds) {
        teamDAO.saveWithAgents(team, agentIds);
    }

    public void addAgents(UUID teamId, List<UUID> agentIds) {
        teamDAO.addAgentsToTeam(teamId, agentIds);
    }

    public void removeAgent(UUID teamId, UUID agentId) {
        teamDAO.removeAgentFromTeam(teamId, agentId);
    }

    public void removeAllAgents(UUID teamId) {
        teamDAO.removeAllAgentsFromTeam(teamId);
    }

    public List<Agent> getMembers(UUID teamId) {
        return teamDAO.getAgentsByTeam(teamId);
    }

    /**
     * Corrige chamada: era selectAll(), agora chama getAll()
     * e encapsula a SQLException numa RuntimeException.
     */
    public List<Team> getAllTeams() {
        try {
            return teamDAO.getAll();
        } catch (SQLException e) {
            throw new RuntimeException("Erro ao buscar todos os times", e);
        }
    }

    /**
     * Busca um time por ID (searchByID é o método da GenericDAO)
     */
    public Team getTeamById(UUID teamId) {
        return teamDAO.searchByID(teamId);
    }

    /**
     * Remove primeiro os vínculos e depois exclui o registro.
     */
    public void deleteTeamSafe(UUID teamId) {
        teamDAO.removeAllAgentsFromTeam(teamId);
        teamDAO.delete(teamId);
    }
}

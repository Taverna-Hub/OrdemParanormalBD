package edu.cesar.taverna.bd.OP.services;

import edu.cesar.taverna.bd.OP.dao.TeamDAO;
import edu.cesar.taverna.bd.OP.entity.Agent;
import edu.cesar.taverna.bd.OP.entity.Team;
import org.springframework.http.ResponseEntity;

import javax.swing.text.html.Option;
import java.sql.SQLException;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

public class TeamService {
    private final TeamDAO teamDAO = new TeamDAO();

    public ResponseEntity<String> createTeamWithAgents(Team team, List<UUID> agentIds) {

        teamDAO.saveWithAgents(team, agentIds);
        return ResponseEntity.ok("");
    }


    public ResponseEntity<String> addAgents(UUID teamId, List<UUID> agentIds) {

        teamDAO.addAgentsToTeam(teamId, agentIds);
        return ResponseEntity.ok("");
    }


    public ResponseEntity<String> removeAgent(UUID teamId, UUID agentId) {

        teamDAO.removeAgentFromTeam(teamId, agentId);
        return ResponseEntity.ok("");
    }


    public void removeAllAgents(UUID teamId) {
        teamDAO.removeAllAgentsFromTeam(teamId);
    }

    public List<Agent> getMembers(UUID teamId) {
        return teamDAO.getAgentsByTeam(teamId);
    }

    public List<Team> getAllTeams() {
        try {
            return teamDAO.getAll();
        } catch (SQLException e) {
            throw new RuntimeException("Erro ao buscar todos os times", e);
        }
    }


    public Optional<Team> getTeamById(UUID teamId) {
        return Optional.ofNullable(teamDAO.searchByID(teamId));
    }

    public ResponseEntity<String> deleteTeamSafe(UUID teamId) {
        teamDAO.removeAllAgentsFromTeam(teamId);
        teamDAO.delete(teamId);
        return ResponseEntity.ok("");
    }
}

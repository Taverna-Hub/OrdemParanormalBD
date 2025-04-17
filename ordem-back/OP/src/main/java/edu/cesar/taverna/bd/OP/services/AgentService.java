package edu.cesar.taverna.bd.OP.services;

import edu.cesar.taverna.bd.OP.dao.AgentDAO;
import edu.cesar.taverna.bd.OP.entity.Agent;

import java.sql.SQLException;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

public class AgentService {

    private final AgentDAO agentDAO = new AgentDAO();

    public void register(Agent agent){
        agentDAO.save(agent);
    }

    public List<Agent> getAllAgents() throws SQLException {
        return agentDAO.getAll();
    }

    public Optional<Agent> getAgentById(UUID id) {
        return Optional.ofNullable(agentDAO.searchByID(id));
    }

    public void updateAgent(Agent agent) {
        agentDAO.update(agent);
    }

    public void deleteAgent(UUID id) {
        agentDAO.delete(id);
    }

}

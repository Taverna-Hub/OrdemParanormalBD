package edu.cesar.taverna.bd.OP.services;

import edu.cesar.taverna.bd.OP.dao.AgentDAO;
import edu.cesar.taverna.bd.OP.entity.agent.Agent;

public class AgentService {

    private final AgentDAO agentDAO = new AgentDAO();

    public void registerAgent(Agent agent){
        System.out.println("Agent recebido no service:");
        System.out.println(agent);

        if (agent.getId() == null){
            agent.setId();
        }
        if (agent.getLogin() == null){
            agent.setLogin();
        }

        agentDAO.save(agent);
    }
}

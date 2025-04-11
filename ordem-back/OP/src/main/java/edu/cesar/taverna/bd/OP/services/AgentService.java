package edu.cesar.taverna.bd.OP.services;

import edu.cesar.taverna.bd.OP.dao.AgentDAO;
import edu.cesar.taverna.bd.OP.entity.Agent;

public class AgentService {

    private final AgentDAO agentDAO = new AgentDAO();

    public void register(Agent agent){
        System.out.println("Agent recebido no service:");
        System.out.println(agent);

        agentDAO.save(agent);
    }
}

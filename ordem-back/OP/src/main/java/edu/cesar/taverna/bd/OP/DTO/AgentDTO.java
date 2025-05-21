package edu.cesar.taverna.bd.OP.DTO;

import edu.cesar.taverna.bd.OP.entity.Agent;
import edu.cesar.taverna.bd.OP.entity.Ritual;

import java.util.List;

public record AgentDTO(Agent agent, List<Ritual> ritual) {
}

package edu.cesar.taverna.bd.OP.DTO;

import java.util.List;
import java.util.UUID;

public class QGWithAgentesDTO {
    private List<UUID> agentIds;

    public List<UUID> getAgentIds() {
        return agentIds;
    }

    public void setAgentIds(List<UUID> agentIds) {
        this.agentIds = agentIds;
    }
}

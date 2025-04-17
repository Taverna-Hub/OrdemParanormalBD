package edu.cesar.taverna.bd.OP.DTO;

import edu.cesar.taverna.bd.OP.entity.Agent;
import edu.cesar.taverna.bd.OP.entity.Team;
import java.util.List;
import java.util.UUID;

public class TeamWithAgentsDTO {
    private Team team;
    private List<UUID> agentIds;

    public Team getTeam() {
        return team;
    }

    public void setTeam(Team team) {
        this.team = team;
    }

    public List<UUID> getAgentIds() {
        return agentIds;
    }

    public void setAgentIds(List<UUID> agentIds) {
        this.agentIds = agentIds;
    }
}
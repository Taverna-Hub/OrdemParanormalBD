package edu.cesar.taverna.bd.OP.DTO;

import edu.cesar.taverna.bd.OP.entity.Agent;

import java.util.List;
import java.util.UUID;

public class TeamDTO {
    private UUID id;
    private String name;
    private String specialization;
    private List<Agent> members;

    // getters & setters
    public UUID getId() { return id; }
    public void setId(UUID id) { this.id = id; }
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public String getSpecialization() { return specialization; }
    public void setSpecialization(String specialization) { this.specialization = specialization; }
    public List<Agent> getMembers() { return members; }
    public void setMembers(List<Agent> members) { this.members = members; }
}


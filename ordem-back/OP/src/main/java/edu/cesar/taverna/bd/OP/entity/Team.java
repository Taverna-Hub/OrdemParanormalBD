package edu.cesar.taverna.bd.OP.entity;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Team {
    private UUID id_team;
    private String name;
    private String specialization;
//    List<Agent> members = new ArrayList<>();
    @JsonCreator
    public Team(@JsonProperty("name") String name, @JsonProperty("specialization") String specialization){
        this.name = name;
        this.specialization = specialization;
        setId_team();
    }

    public void setId_team() {
        this.id_team = UUID.randomUUID();
    }

//    public void addMember(Agent agent){
//        this.members.add(agent);
//    }
//    public void RemoveMember(Agent agent){
//        this.members.remove(agent);
//    }



    //TODO
}

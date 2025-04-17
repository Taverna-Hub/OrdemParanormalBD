package edu.cesar.taverna.bd.OP.entity;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Team {
    private UUID id_team;
    private String name;
    private String specialization;
    @JsonCreator
    public Team(@JsonProperty("name") String name,
                @JsonProperty("specialization") String specialization){
        this.name = name;
        this.specialization = specialization;
        setId();
    }

    public void setId() {
        this.id_team = UUID.randomUUID();
    }
    public void setId(UUID id) {
        this.id_team = id;
    }


}

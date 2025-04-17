package edu.cesar.taverna.bd.OP.entity;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Agent {

    private UUID id;
    private String name;
    private LocalDate birthDate;
    private String telNumber;
    private String rank_agent;
    private int nex;
    private boolean retired;
    private boolean transcended;
    private String specialization;
    @JsonCreator
    public Agent(
            @JsonProperty("name") String name,
            @JsonProperty("birthDate") LocalDate birthDate,
            @JsonProperty("telNumber") String telNumber,
            @JsonProperty("rank_agent") String rank_agent,
            @JsonProperty("nex") int nex,
            @JsonProperty("retired") boolean retired,
            @JsonProperty("transcended") boolean transcended,
            @JsonProperty("specialization") String specialization) {
        this.name = name;
        this.birthDate = birthDate;
        this.telNumber = telNumber;
        this.rank_agent = rank_agent;
        this.nex = nex;
        this.retired = retired;
        this.transcended = transcended;
        this.specialization = specialization;
        setId();
        System.out.println("Con 1");
    }

    // only to promote to Verissimo
    public Agent(Agent agent){
        this(agent.id, agent.name, agent.birthDate, agent.telNumber, agent.rank_agent, agent.nex, agent.retired, agent.transcended, agent.specialization);
    }


    private void setId() {
        this.id = UUID.randomUUID();
    }

}

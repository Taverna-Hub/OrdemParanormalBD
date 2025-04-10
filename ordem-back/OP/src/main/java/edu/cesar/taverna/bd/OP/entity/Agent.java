package edu.cesar.taverna.bd.OP.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.Arrays;
import java.util.List;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Agent {

    private UUID id;
    private String name;
    private LocalDate birthDate;
    private String telNumber;
    private String andress;
    private String rank_agent;
    private int nex;
    private boolean retired;
    private boolean trancended;

    public Agent(String name, LocalDate birthDate, String telNumber, String andress,
                   String rank_agent, int nex, boolean retired, boolean trancended) {
        this.name = name;
        this.birthDate = birthDate;
        this.telNumber = telNumber;
        this.andress = andress;
        this.rank_agent = rank_agent;
        this.nex = nex;
        this.retired = retired;
        this.trancended = trancended;
        setId();
    }

    public Agent(String name, LocalDate birthDate, String telNumber, String andress,
                 String rank_agent) {
        this.name = name;
        this.birthDate = birthDate;
        this.telNumber = telNumber;
        this.andress = andress;
        this.rank_agent = rank_agent;
        this.nex = nex;
        this.retired = retired;
        this.trancended = trancended;
        setId();
    }

    public void setId() {
        this.id = UUID.randomUUID();
    }

}

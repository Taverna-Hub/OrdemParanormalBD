package edu.cesar.taverna.bd.OP.entity;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.Data;

import java.time.LocalDate;
import java.util.UUID;

@Data

public class Verissimo extends Agent{

    public Verissimo(String name, LocalDate birthDate, String telNumber, String andress,
                     String prestige, int nex, boolean retired, boolean trancended){
        super( name,  birthDate,  telNumber,  andress,
                 prestige,  nex,  retired, trancended);
        setId();
    }


}

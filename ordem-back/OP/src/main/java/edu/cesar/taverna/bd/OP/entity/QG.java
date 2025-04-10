package edu.cesar.taverna.bd.OP.entity;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.Data;

import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class QG {

    private UUID id;
    private String name;
    private float security;
    private String location;
    private int salesAmount;
    private Verissimo verissimo;

    public QG( String name, float security, String location, int salesAmount, Verissimo verissimo){
        this.name = name;
        this.security = security;
        this.location = location;
        this.salesAmount = salesAmount;
        this.verissimo = verissimo;
        setId(id);
    }

    public void setId(UUID id) {
        this.id = UUID.randomUUID();
    }
}

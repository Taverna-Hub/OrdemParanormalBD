package edu.cesar.taverna.bd.OP.entity;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.Data;

import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class  QG {
    private UUID id;
    private String name;
    private float security;
    private String location;
    private int salesAmount;
    private Verissimo verissimo;

    @JsonCreator
    public QG(
            @JsonProperty("name") String name,
            @JsonProperty("security") float security,
            @JsonProperty("location") String location,
            @JsonProperty("salesAmount") int salesAmount,
            @JsonProperty("verissimo") Verissimo verissimo
    ) {
        this.name = name;
        this.security = security;
        this.location = location;
        this.salesAmount = salesAmount;
        this.verissimo = verissimo;
        setId();
    }

    private void setId() {
        this.id = UUID.randomUUID();
    }
}

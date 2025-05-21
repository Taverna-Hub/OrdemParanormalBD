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
public class Ritual {
    private UUID id_ritual;
    private String name;
    private String description;
    private String requirements;
    private String risks;
    private UUID id_element;

    @JsonCreator
    public Ritual(
            @JsonProperty("name") String name,
            @JsonProperty("description")String description,
            @JsonProperty("requirements")String requirements,
            @JsonProperty("risks")String risks,
            @JsonProperty("id_element") String id_element
    )
    {
        this.name = name;
        this.description = description;
        this.requirements = requirements;
        this.risks = risks;
        this.id_element = UUID.fromString(id_element);
        setId();
    }

    private void setId() {
        this.id_ritual = UUID.randomUUID();
    }
}

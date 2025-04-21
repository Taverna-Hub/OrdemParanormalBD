package edu.cesar.taverna.bd.OP.entity.Threats;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import java.util.List;
@EqualsAndHashCode(callSuper = true)
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ParanormalEntity extends Threat{
    private String enigma;
    List<String> abilities;
    @JsonCreator
    public ParanormalEntity(@JsonProperty("names") List<String> names,
                            @JsonProperty("description")String description,
                            @JsonProperty("abilities")List<String> abilities,
                            @JsonProperty("elements") List<String> elements,
                            @JsonProperty("enigma")String enigma) {
        super(names, description, elements);
        this.abilities = abilities;
        this.enigma = enigma;
    }
}

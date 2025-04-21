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
public class Organization extends Threat {

    @JsonCreator
    public Organization(@JsonProperty("names") List<String> names,
                        @JsonProperty("description")String description,
                        @JsonProperty("elements") List<String> elements) {
        super(names, description, elements);
    }
}

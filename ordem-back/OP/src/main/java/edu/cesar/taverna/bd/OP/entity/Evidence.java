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
public class Evidence {
    private UUID id_evidence;
    private String origin;
    private String description;
    private String stability_level;
    private UUID mission;

    @JsonCreator
    public Evidence(@JsonProperty("origin") String origin,
                    @JsonProperty("description") String description,
                    @JsonProperty("stability_level") String stability_level,
                    @JsonProperty("mission") String mission){
        this(UUID.randomUUID(), origin, description, stability_level, UUID.fromString(mission));
    }
}

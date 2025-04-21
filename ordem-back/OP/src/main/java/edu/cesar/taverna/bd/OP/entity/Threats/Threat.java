package edu.cesar.taverna.bd.OP.entity.Threats;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
@Data
@NoArgsConstructor
@AllArgsConstructor
public abstract class Threat {
    private UUID id_threat;
    private List<String> names;
    private String description;
    private List<UUID> elements;
    private List<String> elementsNames;

    protected Threat(List<String> names, String description, List<String> elements){
        this.id_threat = UUID.randomUUID();
        this.names = names;
        this.description = description;
        List<UUID> listElemets = new ArrayList<>();
        elements.forEach(e -> listElemets.add(UUID.fromString(e)));
        this.elements = listElemets;
    }
}

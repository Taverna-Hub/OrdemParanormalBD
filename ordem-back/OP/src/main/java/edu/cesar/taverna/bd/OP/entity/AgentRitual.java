package edu.cesar.taverna.bd.OP.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AgentRitual {
    private UUID id_agent;
    private UUID id_ritual;
}

package edu.cesar.taverna.bd.OP.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ThreatMission {
    private UUID id_mission;
    private UUID id_threat;
}

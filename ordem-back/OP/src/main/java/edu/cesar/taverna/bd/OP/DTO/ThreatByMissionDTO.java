package edu.cesar.taverna.bd.OP.DTO;

import java.util.UUID;

public record ThreatByMissionDTO(UUID id_threat, String threat_names, String description, String threatType) {
}

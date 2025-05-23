package edu.cesar.taverna.bd.OP.services;

import edu.cesar.taverna.bd.OP.dao.ThreatMissionDAO;
import edu.cesar.taverna.bd.OP.entity.ThreatMission;
import org.springframework.http.ResponseEntity;

public class ThreatMissionService {
    private final ThreatMissionDAO threatMissionDAO = new ThreatMissionDAO();

    public ResponseEntity<String> register(ThreatMission threatMission) {
        threatMissionDAO.save(threatMission);
        return ResponseEntity.ok("");
    }
}

package edu.cesar.taverna.bd.OP.services;

import edu.cesar.taverna.bd.OP.dao.ThreatMissionDAO;
import edu.cesar.taverna.bd.OP.dao.ThreatNeutralizationDAO;
import edu.cesar.taverna.bd.OP.entity.ThreatMission;
import edu.cesar.taverna.bd.OP.entity.ThreatNeutralization;
import org.springframework.http.ResponseEntity;

public class ThreatNeutralizationService {
    private final ThreatNeutralizationDAO threatNeutralizationDAO = new ThreatNeutralizationDAO();

    public ResponseEntity<String> register(ThreatNeutralization threatNeutralization) {
        threatNeutralizationDAO.save(threatNeutralization);
        return ResponseEntity.ok("");
    }
}

package edu.cesar.taverna.bd.OP.controller;

import edu.cesar.taverna.bd.OP.entity.ThreatMission;
import edu.cesar.taverna.bd.OP.services.ThreatMissionService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.sql.SQLException;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/threatMission")
public class ThreatMissionController extends GenericController<ThreatMission, ThreatMissionService> {
    public ThreatMissionController() {
        super(new ThreatMissionService());
    }

    @Override
    protected ResponseEntity<String> performRegister(ThreatMission threatMission) {
        return service.register(threatMission);
    }

    @Override
    public ResponseEntity<List<ThreatMission>> getAll() throws SQLException {
        return null;
    }

    @Override
    public ResponseEntity<ThreatMission> getById(UUID id) {
        return null;
    }

    @Override
    public ResponseEntity<String> update(UUID id, ThreatMission threatMission) {
        return null;
    }

    @Override
    public ResponseEntity<String> delete(UUID id) {
        return null;
    }
}

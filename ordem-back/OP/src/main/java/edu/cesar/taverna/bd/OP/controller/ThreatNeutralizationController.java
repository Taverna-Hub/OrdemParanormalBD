package edu.cesar.taverna.bd.OP.controller;

import edu.cesar.taverna.bd.OP.entity.ThreatNeutralization;
import edu.cesar.taverna.bd.OP.services.ThreatNeutralizationService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.sql.SQLException;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/threatNeutralization")
public class ThreatNeutralizationController extends GenericController<ThreatNeutralization, ThreatNeutralizationService> {
    public ThreatNeutralizationController() {
        super(new ThreatNeutralizationService());
    }

    @Override
    protected ResponseEntity<String> performRegister(ThreatNeutralization threatNeutralization) {
        return service.register(threatNeutralization);
    }

    @Override
    public ResponseEntity<List<ThreatNeutralization>> getAll() throws SQLException {
        return null;
    }

    @Override
    public ResponseEntity<ThreatNeutralization> getById(UUID id) {
        return null;
    }

    @Override
    public ResponseEntity<String> update(UUID id, ThreatNeutralization threatNeutralization) {
        return null;
    }

    @Override
    public ResponseEntity<String> delete(UUID id) {
        return null;
    }
}

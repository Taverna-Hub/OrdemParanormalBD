package edu.cesar.taverna.bd.OP.controller;

import edu.cesar.taverna.bd.OP.entity.Element;
import edu.cesar.taverna.bd.OP.entity.Evidence;
import edu.cesar.taverna.bd.OP.services.EvidenceService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.sql.SQLException;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/Evidence")
public class EvidenceController extends GenericController<Evidence, EvidenceService>{
    public EvidenceController() {
        super(new EvidenceService());
    }

    @Override
    protected void performRegister(Evidence entity) {
        service.register(entity);
    }

    @Override
    public ResponseEntity<List<Evidence>> getAll() throws SQLException {
        return null;
    }

    @Override
    public ResponseEntity<Evidence> getById(UUID id) throws SQLException {
        return ResponseEntity.ok(service.getByID(id));
    }

    @Override
    public ResponseEntity<String> update(UUID id, Evidence evidence) {
        try {
            evidence.setId_evidence(id);
            service.update(evidence);
            return ResponseEntity.ok("evidence updated successfully.");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Failed to update evidence." + e);
        }
    }

    @Override
    public ResponseEntity<String> delete(UUID id) {
        service.delete(id);
        return ResponseEntity.ok("deleted succesfuly");
    }
    @GetMapping("mission/{id}")
    public ResponseEntity<List<Evidence>> getByMissionId(@PathVariable UUID id){
        List<Evidence> evidences = service.getByMission(id);
        return ResponseEntity.ok(evidences);
    }
}

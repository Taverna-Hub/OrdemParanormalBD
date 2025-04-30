package edu.cesar.taverna.bd.OP.services;

import edu.cesar.taverna.bd.OP.dao.EvidenceDAO;
import edu.cesar.taverna.bd.OP.entity.Evidence;
import org.springframework.http.ResponseEntity;

import java.lang.reflect.Method;
import java.util.List;
import java.util.UUID;

public class EvidenceService {
    private final EvidenceDAO evidenceDAO = new EvidenceDAO();

    public ResponseEntity<String> register(Evidence evidence){

        evidenceDAO.save(evidence);
        return ResponseEntity.ok("");
    }
    public ResponseEntity<String> delete(UUID id){
        evidenceDAO.delete(id);
        return ResponseEntity.ok("");

    }
    public ResponseEntity<String> update(Evidence evidence){
        evidenceDAO.update(evidence);
        return ResponseEntity.ok("");

    }
    public Evidence getByID(UUID id){
        return evidenceDAO.searchByID(id);
    }
    public List<Evidence> getByMission(UUID id){
        return evidenceDAO.getSelectByIdMission(id);
    }
}

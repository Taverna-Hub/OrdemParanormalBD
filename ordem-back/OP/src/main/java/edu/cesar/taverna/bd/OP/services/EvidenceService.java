package edu.cesar.taverna.bd.OP.services;

import edu.cesar.taverna.bd.OP.dao.EvidenceDAO;
import edu.cesar.taverna.bd.OP.entity.Evidence;

import java.util.List;
import java.util.UUID;

public class EvidenceService {
    private final EvidenceDAO evidenceDAO = new EvidenceDAO();

    public void register(Evidence evidence){
        evidenceDAO.save(evidence);
    }
    public void delete(UUID id){
        evidenceDAO.delete(id);
    }
    public void update(Evidence evidence){
        evidenceDAO.update(evidence);
    }
    public Evidence getByID(UUID id){
        return evidenceDAO.searchByID(id);
    }
    public List<Evidence> getByMission(UUID id){
        return evidenceDAO.getSelectByIdMission(id);
    }
}

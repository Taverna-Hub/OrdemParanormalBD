package edu.cesar.taverna.bd.OP.services;

import edu.cesar.taverna.bd.OP.DTO.AgentsBySpecializationDTO;
import edu.cesar.taverna.bd.OP.DTO.MissionByStatusDTO;
import edu.cesar.taverna.bd.OP.DTO.TeamsSpecializationsInHQ;
import edu.cesar.taverna.bd.OP.dao.QGDAO;

import java.util.List;
import java.util.UUID;

public class QGService {

    private final QGDAO hqDAO = new QGDAO();

    public List<TeamsSpecializationsInHQ> getSpecializationsInHQ(UUID id){
        return hqDAO.getSpecializationsInHQ(id);
    }

    public List<MissionByStatusDTO> getMissionByStatus(UUID id) {
        return hqDAO.getMissionsByStatus(id);
    }

    public List<AgentsBySpecializationDTO> getAgentsBySpecializationInHq(UUID id) {
        return hqDAO.getSpecializationsAgents(id);
    }
}

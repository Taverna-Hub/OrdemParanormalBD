package edu.cesar.taverna.bd.OP.services;

import edu.cesar.taverna.bd.OP.DTO.TeamsSpecializationsInHQ;
import edu.cesar.taverna.bd.OP.dao.QGDAO;

import java.util.List;
import java.util.UUID;

public class QGService {

    private final QGDAO hqDAO = new QGDAO();

    public List<TeamsSpecializationsInHQ> getSpecializationsInHQ(UUID id){
        return hqDAO.getSpecializationsInHQ(id);
    }

}

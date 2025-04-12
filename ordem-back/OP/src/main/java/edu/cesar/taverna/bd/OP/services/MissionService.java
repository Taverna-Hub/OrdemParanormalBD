package edu.cesar.taverna.bd.OP.services;

import edu.cesar.taverna.bd.OP.dao.MissionDAO;
import edu.cesar.taverna.bd.OP.entity.Mission;

public class MissionService {
    private  final MissionDAO missionDAO = new MissionDAO();

    public void register(Mission mission){

        missionDAO.save(mission);
    }
}

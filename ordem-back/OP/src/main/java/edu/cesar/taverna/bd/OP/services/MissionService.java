package edu.cesar.taverna.bd.OP.services;

import edu.cesar.taverna.bd.OP.dao.MissionDAO;
import edu.cesar.taverna.bd.OP.entity.Agent;
import edu.cesar.taverna.bd.OP.entity.Mission;

import java.sql.SQLException;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

public class MissionService {
    private  final MissionDAO missionDAO = new MissionDAO();

    public void register(Mission mission){

        missionDAO.save(mission);
    }

    public List<Mission> getAllMissions() throws SQLException {
        return missionDAO.getAll();
    }

    public Optional<Mission> getMissionById(UUID id) {
        return Optional.ofNullable(missionDAO.searchByID(id));
    }
}

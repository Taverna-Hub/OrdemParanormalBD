package edu.cesar.taverna.bd.OP.services;

import edu.cesar.taverna.bd.OP.dao.MissionAssignmentDAO;
import edu.cesar.taverna.bd.OP.entity.MissionAssignment;

import java.sql.SQLException;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

public class MissionAssignmentService {

    private final MissionAssignmentDAO missionAssignmentDAO = new MissionAssignmentDAO();

    public void register(MissionAssignment missionAssignment){
        missionAssignmentDAO.save(missionAssignment);
    }

    public List<MissionAssignment> getAllMissionAssignments() throws SQLException {
        return missionAssignmentDAO.getAll();
    }

    public Optional<MissionAssignment> getMissionAssignmentById(UUID id) {
        return Optional.ofNullable(missionAssignmentDAO.searchByID(id));
    }

    public void updateMissionAssignment(UUID id_team, UUID id_mission) {
        missionAssignmentDAO.update(id_team, id_mission);
    }

    public void deleteMissionAssignment(UUID id_team, UUID id_mission) {
        return;
    }
}

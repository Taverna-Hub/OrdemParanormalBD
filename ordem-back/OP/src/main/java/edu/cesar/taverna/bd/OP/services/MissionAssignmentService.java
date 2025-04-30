package edu.cesar.taverna.bd.OP.services;

import edu.cesar.taverna.bd.OP.dao.MissionAssignmentDAO;
import edu.cesar.taverna.bd.OP.entity.MissionAssignment;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.sql.SQLException;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

public class MissionAssignmentService {

    private final MissionAssignmentDAO missionAssignmentDAO = new MissionAssignmentDAO();

    public ResponseEntity<String> register(MissionAssignment missionAssignment){
        missionAssignmentDAO.save(missionAssignment);
        return ResponseEntity.ok("");
    }

    public List<MissionAssignment> getAllMissionAssignments() throws SQLException {
        return missionAssignmentDAO.getAll();
    }

    public List<MissionAssignment> getAssignmentsByMissionId(UUID id_mission) {
        return missionAssignmentDAO.findByMissionId(id_mission);
    }

    public ResponseEntity<String> updateMissionAssignment(UUID id_team, UUID id_mission) {
         missionAssignmentDAO.update(id_team, id_mission);
        return ResponseEntity.ok("");
    }

    public ResponseEntity<String> deleteMissionAssignment(UUID id_team, UUID id_mission) {
        return ResponseEntity.status(HttpStatus.METHOD_NOT_ALLOWED).body("Metodo não disponivel");
    }
}

package edu.cesar.taverna.bd.OP.controller;


import edu.cesar.taverna.bd.OP.entity.MissionAssignment;
import edu.cesar.taverna.bd.OP.services.MissionAssignmentService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;
import java.util.UUID;

@RestController
@RequestMapping("/assignment")
public class MissionAssignmentController extends GenericController<MissionAssignment, MissionAssignmentService> {
    public MissionAssignmentController(){
        super(new MissionAssignmentService());
    }

    @Override
    protected ResponseEntity<String> performRegister(MissionAssignment missionAssignment) {
        return service.register(missionAssignment);
    }

    @Override
    public ResponseEntity<List<MissionAssignment>> getAll() throws SQLException {
        return ResponseEntity.ok(service.getAllMissionAssignments());
    }

    @Override
    public ResponseEntity<MissionAssignment> getById(UUID id) {
        return null;
    }

    @Override
    public ResponseEntity<String> update(UUID id, MissionAssignment entity) {
        return null;
    }

    @Override
    public ResponseEntity<String> delete(UUID id) {
        return null;
    }

    @PutMapping
    public ResponseEntity<String> updateAssignment(@RequestBody Map<String, UUID> payload) {
        try {
            UUID id_team = payload.get("id_team");
            UUID id_mission = payload.get("id_mission");
           return service.updateMissionAssignment(id_team, id_mission);
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Failed to update entity. " + e.getMessage());
        }

    }

    @GetMapping("/mission/{id_mission}")
    public ResponseEntity<List<MissionAssignment>> getByMission(@PathVariable UUID id_mission) {
        List<MissionAssignment> assignments = service.getAssignmentsByMissionId(id_mission);
        if (assignments.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(assignments);
    }


    public ResponseEntity<String> delete(UUID id_team, UUID id_mission) {
        return null;
    }
}

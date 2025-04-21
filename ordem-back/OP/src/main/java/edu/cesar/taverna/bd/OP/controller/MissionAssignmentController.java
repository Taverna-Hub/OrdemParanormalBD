package edu.cesar.taverna.bd.OP.controller;


import edu.cesar.taverna.bd.OP.entity.MissionAssignment;
import edu.cesar.taverna.bd.OP.services.MissionAssignmentService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.sql.SQLException;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/assignment")
public class MissionAssignmentController extends GenericController<MissionAssignment, MissionAssignmentService> {
    public MissionAssignmentController(){
        super(new MissionAssignmentService());
    }

    @Override
    protected void performRegister(MissionAssignment missionAssignment) {
        service.register(missionAssignment);
    }

    @Override
    public ResponseEntity<List<MissionAssignment>> getAll() throws SQLException {
        return ResponseEntity.ok(service.getAllMissionAssignments());
    }

    @Override
    public ResponseEntity<MissionAssignment> getById(UUID id) {
        return service.getMissionAssignmentById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @Override
    public ResponseEntity<String> update(UUID id_team, MissionAssignment missionAssignment) {
        return null;
    }

    @Override
    public ResponseEntity<String> delete(UUID id) {
        return null;
    }
}

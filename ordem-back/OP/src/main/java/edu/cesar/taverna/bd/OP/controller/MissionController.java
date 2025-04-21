package edu.cesar.taverna.bd.OP.controller;

import edu.cesar.taverna.bd.OP.entity.Mission;
import edu.cesar.taverna.bd.OP.services.MissionService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.sql.SQLException;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/missions")
public class MissionController extends GenericController<Mission, MissionService>{
    public MissionController(){
        super(new MissionService());
    }


    @Override
    protected void performRegister(Mission mission) {
        service.register(mission);
    }


    @Override
    public ResponseEntity<List<Mission>> getAll() throws SQLException {
        return ResponseEntity.ok(service.getAllMissions());
    }

    @Override
    public ResponseEntity<Mission> getById(UUID id) {
        System.out.println(id);
        return service.getMissionById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @Override
    public ResponseEntity<String> update(UUID id, Mission entity) {
        return null;
    }

    @Override
    public ResponseEntity<String> delete(UUID id) {
        return null;
    }
}

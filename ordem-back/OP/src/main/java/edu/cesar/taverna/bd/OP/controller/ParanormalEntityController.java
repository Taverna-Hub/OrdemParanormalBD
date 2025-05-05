package edu.cesar.taverna.bd.OP.controller;

import edu.cesar.taverna.bd.OP.entity.Threats.ParanormalEntity;
import edu.cesar.taverna.bd.OP.services.ParanormalEntityService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.sql.SQLException;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/paranormalEntity")
public class ParanormalEntityController extends GenericController<ParanormalEntity, ParanormalEntityService> {

    public ParanormalEntityController() {
        super(new ParanormalEntityService());
    }
    @Override
    protected ResponseEntity<String> performRegister(ParanormalEntity entity) {
        return service.register(entity);

    }

    @Override
    public ResponseEntity<List<ParanormalEntity>> getAll() throws SQLException {
        return ResponseEntity.ok(service.getAllParanormalEntities());
    }

    @Override
    public ResponseEntity<ParanormalEntity> getById(UUID id) throws SQLException {
        return service.getParanormalEntityById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @Override
    public ResponseEntity<String> update(UUID id, ParanormalEntity entity) {
        System.out.println(entity);
        System.out.println(id);
        try {
            return service.updateParanormalEntity(entity);
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Failed to update en." + e);
        }
    }

    @Override
    public ResponseEntity<String> delete(UUID id) {
        try {
            return service.deleteParanormalEntity(id);
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Failed to delete agent.");
        }
    }
}

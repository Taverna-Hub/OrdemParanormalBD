package edu.cesar.taverna.bd.OP.services;


import edu.cesar.taverna.bd.OP.dao.ParanormalEntityDAO;
import edu.cesar.taverna.bd.OP.entity.Threats.ParanormalEntity;
import org.springframework.http.ResponseEntity;

import java.sql.SQLException;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

public class ParanormalEntityService {
    private final ParanormalEntityDAO paranormalDAO = new ParanormalEntityDAO();

    public ResponseEntity<String> register(ParanormalEntity entity){
         paranormalDAO.save(entity);
        return ResponseEntity.ok("");

    }

    public List<ParanormalEntity> getAllParanormalEntities() throws SQLException {
        return paranormalDAO.getAll();
    }

    public Optional<ParanormalEntity> getParanormalEntityById(UUID id) throws SQLException {
        return Optional.ofNullable(paranormalDAO.getById(id));
    }

    public ResponseEntity<String> updateParanormalEntity(ParanormalEntity entity) throws SQLException {
         paranormalDAO.updatee(entity);
        return ResponseEntity.ok("");

    }

    public ResponseEntity<String> deleteParanormalEntity(UUID id) throws SQLException {
         paranormalDAO.delete(id);
         return ResponseEntity.ok("");
    }
}

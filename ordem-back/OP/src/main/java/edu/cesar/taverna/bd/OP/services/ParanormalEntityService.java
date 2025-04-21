package edu.cesar.taverna.bd.OP.services;


import edu.cesar.taverna.bd.OP.dao.ParanormalEntityDAO;
import edu.cesar.taverna.bd.OP.entity.Threats.ParanormalEntity;

import java.sql.SQLException;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

public class ParanormalEntityService {
    private final ParanormalEntityDAO paranormalDAO = new ParanormalEntityDAO();

    public void register(ParanormalEntity entity){
        paranormalDAO.save(entity);
    }

    public List<ParanormalEntity> getAllParanormalEntities() throws SQLException {
        return paranormalDAO.getAll();
    }

    public Optional<ParanormalEntity> getParanormalEntityById(UUID id) throws SQLException {
        return Optional.ofNullable(paranormalDAO.getById(id));
    }

    public void updateParanormalEntity(ParanormalEntity entity) throws SQLException {
        paranormalDAO.updatee(entity);
    }

    public void deleteParanormalEntity(UUID id) throws SQLException {
        paranormalDAO.delete(id);
    }
}

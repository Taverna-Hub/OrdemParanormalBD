package edu.cesar.taverna.bd.OP.controller;

import edu.cesar.taverna.bd.OP.entity.QG;
import edu.cesar.taverna.bd.OP.services.QGService;
import org.springframework.http.ResponseEntity;

import java.sql.SQLException;
import java.util.List;
import java.util.UUID;

public class QGController extends GenericController<QGService, QG> {

    private final QGService qgService = new QGService();

    public QGController(QG service) {
        super(service);
    }

    @Override
    protected void performRegister(QGService entity) {

    }

    @Override
    public ResponseEntity<List<QGService>> getAll() throws SQLException {
        return null;
    }

    @Override
    public ResponseEntity<QGService> getById(UUID id) {
        return null;
    }

    @Override
    public ResponseEntity<String> update(UUID id, QGService entity) {
        return null;
    }

    @Override
    public ResponseEntity<String> delete(UUID id) {
        return null;
    }
}

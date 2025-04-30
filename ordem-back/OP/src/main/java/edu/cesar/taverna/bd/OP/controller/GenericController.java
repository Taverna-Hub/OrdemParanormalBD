package edu.cesar.taverna.bd.OP.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;
import java.util.List;
import java.util.UUID;

public abstract class GenericController<T, S> {
    protected final S service;

    public GenericController(S service){
        this.service = service;
    }

    protected abstract ResponseEntity<String> performRegister(T entity);

    @PostMapping
    public ResponseEntity<String> register(@RequestBody T entity){
        try{
            return performRegister(entity);

        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Unexpected error in creating " + entity.getClass().getName());
        }
    }

    // GET All
    @GetMapping
    public abstract ResponseEntity<List<T>> getAll() throws SQLException;

    // GET by ID
    @GetMapping("/{id}")
    public abstract ResponseEntity<T> getById(@PathVariable UUID id) throws SQLException;

    // PUT
    @PutMapping("/{id}")
    public abstract ResponseEntity<String> update(@PathVariable UUID id, @RequestBody T entity);

    // DELETE
    @DeleteMapping("/{id}")
    public abstract ResponseEntity<String> delete(@PathVariable UUID id);

}

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

    protected abstract void performRegister(T entity);

    @PostMapping
    public ResponseEntity<String> register(@RequestBody T entity){
        try{
            performRegister(entity);
            return ResponseEntity.status(HttpStatus.CREATED).body(entity.getClass().getName() + " registered successfully");

        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error in creating " + entity.getClass().getName());
        }
    }

    // GET All
    @GetMapping
    public abstract ResponseEntity<List<T>> getAll() throws SQLException;

    // GET by ID
    @GetMapping("/{id}")
    public abstract ResponseEntity<T> getById(@PathVariable UUID id);

    // PUT
    @PutMapping("/{id}")
    public abstract ResponseEntity<String> update(@PathVariable UUID id, @RequestBody T entity);

    // DELETE
    @DeleteMapping("/{id}")
    public abstract ResponseEntity<String> delete(@PathVariable UUID id);

}

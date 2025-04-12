package edu.cesar.taverna.bd.OP.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

public abstract class GenericController<T, S> {
    protected final S service;

    public GenericController(S service){
        this.service = service;
    }

    protected abstract void performRegister(T entity);
    protected abstract String successMessage();
    protected abstract String errorMessage();

    @PostMapping
    public ResponseEntity<String> register(@RequestBody T entity){
        try{
            performRegister(entity);
            return ResponseEntity.status(HttpStatus.CREATED).body(successMessage());

        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(errorMessage());
        }
    }
}

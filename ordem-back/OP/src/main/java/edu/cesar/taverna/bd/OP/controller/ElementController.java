package edu.cesar.taverna.bd.OP.controller;

import edu.cesar.taverna.bd.OP.entity.Element;
import edu.cesar.taverna.bd.OP.services.ElementService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;
@RestController
@RequestMapping("/element")
public class ElementController {
    private final ElementService elementService = new ElementService();


    @GetMapping
    public ResponseEntity<List<Element>> getAll() {
        List<Element> elements = elementService.getAllElements();
        return ResponseEntity.ok(elements);
    }

    @GetMapping("/{name}")
    public ResponseEntity<Element> getById(@PathVariable String name) {
        Element element = elementService.getElementById(name);
        if (element != null) {
            return ResponseEntity.ok(element);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }


}

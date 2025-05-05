package edu.cesar.taverna.bd.OP.controller;

import edu.cesar.taverna.bd.OP.services.VerissimoService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/verissimo")
public class VerissimoController {
    private final VerissimoService verissimoService = new VerissimoService();

    @GetMapping
    ResponseEntity<String> teapot(){
        return ResponseEntity.status(HttpStatus.I_AM_A_TEAPOT).body("i am a useless Teapot");
    }


}

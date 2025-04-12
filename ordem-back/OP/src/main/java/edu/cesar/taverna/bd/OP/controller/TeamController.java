package edu.cesar.taverna.bd.OP.controller;


import edu.cesar.taverna.bd.OP.entity.Team;
import edu.cesar.taverna.bd.OP.services.TeamService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/Teams")
public class TeamController {
    private final TeamService teamService = new TeamService();

    @PostMapping
    public ResponseEntity<String> register(@RequestBody Team team) {
        try {

            return ResponseEntity.status(HttpStatus.CREATED).body("Agent sucessfuly registered");
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error on register Agent.");
        }
    }
}

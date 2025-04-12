package edu.cesar.taverna.bd.OP.controller;


import edu.cesar.taverna.bd.OP.dao.AgentDAO;
import edu.cesar.taverna.bd.OP.dao.GenericDAO;
import edu.cesar.taverna.bd.OP.dao.TeamDAO;
import edu.cesar.taverna.bd.OP.entity.Agent;
import edu.cesar.taverna.bd.OP.entity.Team;
import edu.cesar.taverna.bd.OP.services.AgentService;
import edu.cesar.taverna.bd.OP.services.TeamService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/teams")
public class TeamController extends GenericController<Team, TeamService> {
    public TeamController(){
        super(new TeamService());
    }

    @Override
    protected void performRegister(Team team) {
        service.register(team);
    }

    @Override
    protected String successMessage() {
        return "team registered successfully";
    }

    @Override
    protected String errorMessage() {
        return "Failed to register team";
    }

}

package edu.cesar.taverna.bd.OP.controller;

import edu.cesar.taverna.bd.OP.entity.Mission;
import edu.cesar.taverna.bd.OP.services.MissionService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/missions")
public class MissionController extends GenericController<Mission, MissionService>{
    public MissionController(){
        super(new MissionService());
    }


    @Override
    protected void performRegister(Mission mission) {
        service.register(mission);
    }

    @Override
    protected String successMessage() {
        return "Mission Created Successfully";
    }

    @Override
    protected String errorMessage() {
        return "Erron on creating Mission";
    }
}

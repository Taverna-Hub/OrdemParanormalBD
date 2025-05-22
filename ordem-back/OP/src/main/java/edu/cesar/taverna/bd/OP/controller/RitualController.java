package edu.cesar.taverna.bd.OP.controller;

import edu.cesar.taverna.bd.OP.DTO.TeamsSpecializationsInHQ;
import edu.cesar.taverna.bd.OP.entity.Ritual;
import edu.cesar.taverna.bd.OP.services.ElementService;
import edu.cesar.taverna.bd.OP.services.RitualService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.sql.SQLException;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/ritual")
public class RitualController {
    private final RitualService ritualService = new RitualService();

    @GetMapping()
    private List<Ritual> getAllRituals() throws SQLException {
        return ritualService.getAllRituals();
    }
}

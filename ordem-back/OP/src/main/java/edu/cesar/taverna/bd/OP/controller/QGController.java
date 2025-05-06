package edu.cesar.taverna.bd.OP.controller;

import edu.cesar.taverna.bd.OP.DTO.AgentsBySpecializationDTO;
import edu.cesar.taverna.bd.OP.DTO.MissionByStatusDTO;
import edu.cesar.taverna.bd.OP.DTO.TeamsSpecializationsInHQ;
import edu.cesar.taverna.bd.OP.services.QGService;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/QG")
public class QGController {

    @Autowired
    private HttpSession session;
    private final QGService service = new QGService();


    @GetMapping("/teamsSpecializations")
    private List<TeamsSpecializationsInHQ> getSpecialzationsInHQ(){
        UUID id = (UUID) session.getAttribute("id_hq");
        return service.getSpecializationsInHQ(id);
    }


    @GetMapping("/missions/status")
    public List<MissionByStatusDTO> getMissionsByStatus() {
        UUID id = (UUID) session.getAttribute("id_hq");
        return service.getMissionByStatus(id);
    }

    @GetMapping("/agents/specialization")
    public List<AgentsBySpecializationDTO> getAgentsBySpecializationInHq() {
        UUID id = (UUID) session.getAttribute("id_hq");
        return service.getAgentsBySpecializationInHq(id);
    }

}

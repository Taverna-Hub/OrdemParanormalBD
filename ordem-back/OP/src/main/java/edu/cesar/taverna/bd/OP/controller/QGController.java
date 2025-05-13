package edu.cesar.taverna.bd.OP.controller;

import edu.cesar.taverna.bd.OP.DTO.*;
import edu.cesar.taverna.bd.OP.services.QGService;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/qg")
public class QGController {

    @Autowired
    private HttpSession session;
    private final QGService service = new QGService();


    @GetMapping("/teams/specializations")
    private List<TeamsSpecializationsInHQ> getSpecialzationsInHQ(){
        UUID id = (UUID) session.getAttribute("id_hq");
        return service.getSpecializationsInHQ(id);
    }


    @GetMapping("/missions/status")
    public List<MissionByStatusDTO> getMissionsByStatus() {
        UUID id = (UUID) session.getAttribute("id_hq");
        return service.getMissionByStatus(id);
    }

    @GetMapping("/agents/nex")
    public List<NexByHqDTO> getMeanNexByHQ() {
        return service.getMeanNexByHQ();
    }


    @GetMapping("/agents/specialization")
    public List<AgentsBySpecializationDTO> getAgentsBySpecializationInHq() {
        UUID id = (UUID) session.getAttribute("id_hq");
        return service.getAgentsBySpecializationInHq(id);
    }

    @GetMapping("/agents/rank")
    public List<RankAgentsDTO> getRankAgentsByHQ(){
        UUID id = (UUID) session.getAttribute("id_hq");
        return service.getRankAgentsByHQ(id);
    }

}

package edu.cesar.taverna.bd.OP.controller;

import edu.cesar.taverna.bd.OP.DTO.*;
import edu.cesar.taverna.bd.OP.services.QGService;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.net.http.HttpResponse;
import java.sql.SQLException;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/qg")
public class QGController {

    @Autowired
    private HttpSession session;
    private final QGService service = new QGService();


    @GetMapping("/teams/specializations")
    private List<TeamsSpecializationsInHQ> getSpecialzationsInHQ() {
        UUID id = (UUID) session.getAttribute("id_hq");
        return service.getSpecializationsInHQ(id);
    }


    @GetMapping("/missions/status")
    public List<MissionByStatusDTO> getMissionsByStatus() {
        UUID id = (UUID) session.getAttribute("id_hq");
        return service.getMissionByStatus(id);
    }

    @GetMapping("/missions/finished")
    public FinishedMissionDTO getFinishedMissions(@RequestParam("m") Integer month,
                                                  @RequestParam("y") Integer year) {
        UUID id = (UUID) session.getAttribute("id_hq");
        return service.getFinishedMissions(id, month, year);
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

    @GetMapping("/agents/active")
    public ActiveAgentsDTO getActiveAgents() {
        UUID id = (UUID) session.getAttribute("id_hq");
        return service.getActiveAgents(id);
    }

    @GetMapping("/missions/open")
    public OpenMissionsDTO getOpenMissions() {
        UUID id = (UUID) session.getAttribute("id_hq");
        return service.getOpenMissions(id);
    }

    @GetMapping("/missions/duration")
    public MissionAvgDurationDTO getAvgMissionDuration(@RequestParam("m") Integer month,
                                                       @RequestParam("y") Integer year) {
        UUID id = (UUID) session.getAttribute("id_hq");
        return service.getMissionAverageDuration(id, month, year);
    }

    @GetMapping("/welcome")
    public VerissimoDTO getVerissimoHQ(){
        UUID id = (UUID) session.getAttribute("id_hq");
        return service.getVerissimoHQ(id);
    }

    @GetMapping("/threats/location")
    public ResponseEntity<List<ThreatElementOnGeoCord>> getThreatGeoCord() throws SQLException {
        List<ThreatElementOnGeoCord> list = service.getThreatElementCord();
        return ResponseEntity.ok().body(list);
    }

}

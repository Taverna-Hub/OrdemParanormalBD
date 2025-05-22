package edu.cesar.taverna.bd.OP.controller;

import edu.cesar.taverna.bd.OP.DTO.AgentsBySpecializationDTO;
import edu.cesar.taverna.bd.OP.DTO.MissionWithTeamDTO;
import edu.cesar.taverna.bd.OP.DTO.ThreatByMissionDTO;
import edu.cesar.taverna.bd.OP.entity.Mission;
import edu.cesar.taverna.bd.OP.entity.ThreatNeutralization;
import edu.cesar.taverna.bd.OP.services.MissionService;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/missions")
public class MissionController extends GenericController<Mission, MissionService>{
    @Autowired
    private HttpSession session;
    public MissionController(){
        super(new MissionService());
    }


    @Override
    protected ResponseEntity<String> performRegister(Mission mission) {
        UUID id_hq = (UUID) session.getAttribute("id_hq");
        mission.setId_hq(id_hq);
        return service.register(mission);
    }


    @Override
    public ResponseEntity<List<Mission>> getAll() throws SQLException {
        UUID id_hq = (UUID) session.getAttribute("id_hq");
        System.out.println(id_hq);
        List<Mission> missionList = service.getAllMissionsByHQ(id_hq);
        if (missionList.isEmpty()){
            return ResponseEntity.status(HttpStatus.I_AM_A_TEAPOT).body(null);
        }
        return ResponseEntity.ok(missionList);
    }

    @RequestMapping("/with_team")
    public ResponseEntity<List<MissionWithTeamDTO>> getAllWithTeam() throws SQLException {
        UUID id_hq = (UUID) session.getAttribute("id_hq");
        List<MissionWithTeamDTO> missionList = service.getAllMissionsWithTeam(id_hq);
        if (missionList.isEmpty()){
            return ResponseEntity.status(HttpStatus.I_AM_A_TEAPOT).body(null);
        }
        return ResponseEntity.ok(missionList);
    }

    @Override
    public ResponseEntity<Mission> getById(UUID id) {
        System.out.println(id);
        return service.getMissionById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @Override
    public ResponseEntity<String> update(UUID id, Mission entity) {
        return null;
    }

    @Override
    public ResponseEntity<String> delete(UUID id) {
        return null;
    }

    @GetMapping("/agents/specialization/{id_mission}")
    public List<AgentsBySpecializationDTO> getAgentsBySpecializationInMission(@PathVariable UUID id_mission) {
        UUID id_hq = (UUID) session.getAttribute("id_hq");

        return service.getAgentsSpecializationInMission(id_hq, id_mission);
    }

    @GetMapping("/threats/{id_mission}")
    public List<ThreatByMissionDTO> getThreatsByMission(@PathVariable String id_mission) {
        return service.getThreatsByMission(UUID.fromString(id_mission));
    }

    @GetMapping("/neutralization/{id_mission}")
    public List<ThreatNeutralization> getThreatsNeutralizationByMission(@PathVariable String id_mission) {
        return service.getThreatsNeutralizationByMission(UUID.fromString(id_mission));
    }
}

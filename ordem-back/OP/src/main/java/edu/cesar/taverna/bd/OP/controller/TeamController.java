package edu.cesar.taverna.bd.OP.controller;

import edu.cesar.taverna.bd.OP.DTO.TeamWithAgentsDTO;
import edu.cesar.taverna.bd.OP.DTO.TeamDTO;
import edu.cesar.taverna.bd.OP.entity.Agent;
import edu.cesar.taverna.bd.OP.entity.Team;
import edu.cesar.taverna.bd.OP.services.TeamService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/teams")
public class TeamController {
    private final TeamService service = new TeamService();

    @PostMapping
    public ResponseEntity<String> create(@RequestBody TeamWithAgentsDTO dto) {
        service.createTeamWithAgents(dto.getTeam(), dto.getAgentIds());
        return ResponseEntity.status(HttpStatus.CREATED).body("Team created with agents");
    }

    @PostMapping("/{id}/agents")
    public ResponseEntity<String> addAgents(
            @PathVariable UUID id,
            @RequestBody List<UUID> agentIds) {
        service.addAgents(id, agentIds);
        return ResponseEntity.ok("Agents added to team");
    }

    @DeleteMapping("/{teamId}/agents/{agentId}")
    public ResponseEntity<String> removeAgent(
            @PathVariable UUID teamId,
            @PathVariable UUID agentId) {
        service.removeAgent(teamId, agentId);
        return ResponseEntity.ok("Agent removed");
    }

    @GetMapping("/{id}/agents")
    public ResponseEntity<List<Agent>> getMembers(@PathVariable UUID id) {
        List<Agent> members = service.getMembers(id);
        return ResponseEntity.ok(members);
    }

    @GetMapping
    public ResponseEntity<List<TeamDTO>> getAll() {
        List<Team> teams = service.getAllTeams();
        List<TeamDTO> dtos = teams.stream().map(t -> {
            TeamDTO dto = new TeamDTO();
            dto.setId(t.getId_team());
            dto.setName(t.getName());
            dto.setSpecialization(t.getSpecialization());
            dto.setMembers(service.getMembers(t.getId_team()));
            return dto;
        }).toList();
        return ResponseEntity.ok(dtos);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> delete(@PathVariable UUID id) {
        service.deleteTeamSafe(id);
        return ResponseEntity.ok("Team deleted safely");
    }
}
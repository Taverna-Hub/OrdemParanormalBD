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

    @GetMapping("/{id}")
    public ResponseEntity<Team> getById(@PathVariable String id) {
        return service.getTeamById(UUID.fromString(id))
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }


    @PostMapping
    public ResponseEntity<String> create(@RequestBody TeamWithAgentsDTO dto) {
        return service.createTeamWithAgents(dto.getTeam(), dto.getAgentIds());
    }

    @PostMapping("/{id}/agents")
    public ResponseEntity<String> addAgents(
            @PathVariable UUID id,
            @RequestBody List<UUID> agentIds) {
        return service.addAgents(id, agentIds);
    }

    @DeleteMapping("/{teamId}/agents/{agentId}")
    public ResponseEntity<String> removeAgent(
            @PathVariable UUID teamId,
            @PathVariable UUID agentId) {
        return service.removeAgent(teamId, agentId);

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
        return service.deleteTeamSafe(id);
    }
}
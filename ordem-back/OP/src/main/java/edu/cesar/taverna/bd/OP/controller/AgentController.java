    package edu.cesar.taverna.bd.OP.controller;

    import edu.cesar.taverna.bd.OP.DTO.AgentByRanksDTO;
    import edu.cesar.taverna.bd.OP.DTO.AgentDTO;
    import edu.cesar.taverna.bd.OP.entity.Agent;
    import edu.cesar.taverna.bd.OP.entity.AgentRitual;
    import edu.cesar.taverna.bd.OP.services.AgentService;
    import jakarta.servlet.http.HttpSession;
    import org.springframework.beans.factory.annotation.Autowired;
    import org.springframework.http.HttpStatus;
    import org.springframework.http.ResponseEntity;
    import org.springframework.web.bind.annotation.*;

    import java.sql.SQLException;
    import java.util.List;
    import java.util.UUID;

    @RestController
    @RequestMapping("/agents")
    public class AgentController extends GenericController<Agent , AgentService> {

        @Autowired
        private HttpSession session;

        public AgentController(){
            super(new AgentService());
        }

        @Override
        protected ResponseEntity<String> performRegister(Agent agent) {
           return service.register(agent);
        }

        @Override
        public ResponseEntity<List<Agent>> getAll() throws SQLException {
            UUID id_hq = (UUID) session.getAttribute("id_hq");
            if (id_hq == null){
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
            }

            List<Agent> agents = service.listByHQ(id_hq);
            return ResponseEntity.ok(agents);

        }


        @Override
        public ResponseEntity<Agent> getById(UUID id) {
            return service.getAgentById(id)
                    .map(ResponseEntity::ok)
                    .orElse(ResponseEntity.notFound().build());
        }

        @Override
        public ResponseEntity<String> update(UUID id, Agent agent) {
            System.out.println(agent);
            System.out.println(id);
            try {
                agent.setId(id);
                return service.updateAgent(agent);
            } catch (Exception e) {
                return ResponseEntity.status(500).body("Failed to update agent." + e);
            }
        }

        @Override
        public ResponseEntity<String> delete(UUID id) {
            try {
                return service.deleteAgent(id);
            } catch (Exception e) {
                return ResponseEntity.status(500).body("Failed to delete agent.");
            }

        }

        @GetMapping("/ranks")
        public ResponseEntity<List<AgentByRanksDTO>> getAgentsRanks() {
            UUID id_hq = (UUID) session.getAttribute("id_hq");
            if (id_hq == null){
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
            }

            List<AgentByRanksDTO> ranks = service.getAgentsRanks(id_hq);
            return ResponseEntity.ok(ranks);
        }

        @GetMapping("/{id}/ritual")
        public AgentDTO getByIdWithRituals(@PathVariable UUID id) {
            return service.getAgentsWithRituals(id);
        }


        @PostMapping("/ritual")
        public ResponseEntity<String> performRegister(@RequestBody AgentRitual agentRitual) {
            return service.registerAgentRitual(agentRitual);
        }

        /*
        public ResponseEntity<List<Agent>> getByHQ(HttpSession session) {
            UUID id_hq = (UUID) session.getAttribute("id_hq");
            if (id_hq == null){
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
            }

            List<Agent> agents = service.listByHQ(id_hq);
            return ResponseEntity.ok(agents);

        }
         */

        /*
        public ResponseEntity<List<Agent>> getAll() throws SQLException {
            return ResponseEntity.ok(service.getAllAgents());
        }
         */
    }

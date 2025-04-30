    package edu.cesar.taverna.bd.OP.controller;

    import edu.cesar.taverna.bd.OP.entity.Agent;
    import edu.cesar.taverna.bd.OP.services.AgentService;
    import org.springframework.http.ResponseEntity;
    import org.springframework.web.bind.annotation.RequestMapping;
    import org.springframework.web.bind.annotation.RestController;

    import java.sql.SQLException;
    import java.util.List;
    import java.util.UUID;

    @RestController
    @RequestMapping("/agents")
    public class AgentController extends GenericController<Agent , AgentService> {
        public AgentController(){
            super(new AgentService());
        }

        @Override
        protected ResponseEntity<String> performRegister(Agent agent) {
           return service.register(agent);
        }

        @Override
        public ResponseEntity<List<Agent>> getAll() throws SQLException {
            return ResponseEntity.ok(service.getAllAgents());
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
    }

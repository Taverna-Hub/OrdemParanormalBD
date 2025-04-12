    package edu.cesar.taverna.bd.OP.controller;

    import edu.cesar.taverna.bd.OP.entity.Agent;
    import edu.cesar.taverna.bd.OP.services.AgentService;
    import org.springframework.web.bind.annotation.RequestMapping;
    import org.springframework.web.bind.annotation.RestController;

    @RestController
    @RequestMapping("/agents")
    public class AgentController extends GenericController<Agent , AgentService> {
        public AgentController(){
            super(new AgentService());
        }

        @Override
        protected void performRegister(Agent agent) {
            service.register(agent);
        }

        @Override
        protected String successMessage() {
            return "Agent registered successfully";
        }

        @Override
        protected String errorMessage() {
            return "Failed to register Agent";
        }


    }

package edu.cesar.taverna.bd.OP.services;

import edu.cesar.taverna.bd.OP.dao.AgentDAO;
import edu.cesar.taverna.bd.OP.entity.Agent;
import org.hibernate.annotations.processing.SQL;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.sql.SQLException;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.Random;
import java.util.UUID;

public class AgentService {

    private final AgentDAO agentDAO = new AgentDAO();
    private final List<String> accepted_ranks = List.of("Recruta", "Veterano","Elite");
    private final List<String> accepted_specializations = List.of("Ocultista","Especialista","Combatente");

    private ResponseEntity<String> verify(Agent agent){

        if (agent.getName().isEmpty()){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("O nome do agente não pode ser nulo");
        }

        if (agent.getBirthDate().isAfter(LocalDate.now().minusYears(18))){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("O agente deve ser maior de idade");
        }

        if (!accepted_ranks.contains(agent.getRank_agent())){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Escolha apenas dentre os ranques disponiveis");
        }

        if (!accepted_specializations.contains(agent.getSpecialization())){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Escolha apenas dentre as especialidades disponiveis");
        }
        if (agent.getNex() < 0 || agent.getNex() > 100){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("O nivel de exposição deve estar entre 0% e 100%");
        }
        if (!agent.getTelNumber().matches("^(\\+55\\s?)?(\\(?[1-9]{2}\\)?[\\s-]?)?(9\\d{4}|\\d{4})-?\\d{4}$")){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("insira um numero valido");
        }

        return null;
    }

    public ResponseEntity<String> register(Agent agent){
        while (agentDAO.searchByID(agent.getId()) != null){
            agent.setId(UUID.randomUUID());
        }

        ResponseEntity<String> verified = verify(agent);
        if (verified != null){
            return verified;
        }

        agentDAO.save(agent);
        return ResponseEntity.ok("Agente criado com sucesso");

    }

    public List<Agent> getAllAgents() throws SQLException {
        return agentDAO.getAll();
    }

    public Optional<Agent> getAgentById(UUID id) {
        return Optional.ofNullable(agentDAO.searchByID(id));
    }

    public ResponseEntity<String> updateAgent(Agent agent) {
        ResponseEntity<String> verified = verify(agent);
        if (verified != null){
            return verified;
        }

        agentDAO.update(agent);
        return ResponseEntity.ok("Agente atualizado com sucesso");
    }

    public ResponseEntity<String> deleteAgent(UUID id) {
        if (agentDAO.searchByID(id) == null){
          return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Agente não encontrado");
        }
        agentDAO.delete(id);
        return ResponseEntity.ok("Deletado com sucesso");
    }

    public List<Agent> listByHQ(UUID id_hq) {
        try {
            return new AgentDAO().findByHQ(id_hq);
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }

}

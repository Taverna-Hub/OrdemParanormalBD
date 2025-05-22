package edu.cesar.taverna.bd.OP.services;

import edu.cesar.taverna.bd.OP.dao.AgentDAO;
import edu.cesar.taverna.bd.OP.dao.RitualDAO;
import edu.cesar.taverna.bd.OP.entity.Agent;
import edu.cesar.taverna.bd.OP.entity.Ritual;
import org.springframework.stereotype.Service;

import java.sql.SQLException;
import java.util.List;

public class RitualService {

    private final RitualDAO ritualDAO = new RitualDAO();

    public List<Ritual> getAllRituals() throws SQLException {
        return ritualDAO.getAll();
    }
}

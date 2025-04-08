package edu.cesar.taverna.bd.OP.dao;

import edu.cesar.taverna.bd.OP.config.ConnectionFactory;
import edu.cesar.taverna.bd.OP.entity.Agent;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class AgentDAO {
    public void save(Agent agent) {
        System.out.println("Salvando no banco:");
        System.out.println(agent.getId());
//        System.out.println(agent.getLogin());

        String sql = "INSERT INTO agents (id_agent, name, birth_date, tel_number, andress, prestige, nex, retired, trancended)" +
                "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

        try (Connection conn = ConnectionFactory.getConnection();
             PreparedStatement stmt = conn.prepareStatement(sql)) {

            stmt.setString(1, agent.getId().toString());
            stmt.setString(2, agent.getName());
//            stmt.setString(3, agent.getLogin());
            stmt.setDate(3, java.sql.Date.valueOf(agent.getBirthDate()));
            // certifique-se de que o driver JDBC lida com LocalDate
            stmt.setString(4, agent.getTelNumber());
            stmt.setString(5, agent.getAndress());
            stmt.setString(6, agent.getPrestige());
            stmt.setInt(7, agent.getNex());
            stmt.setBoolean(8, agent.isRetired());
            stmt.setBoolean(9, agent.isTrancended());
//            stmt.setString(11, agent.getPassword());

            stmt.executeUpdate();

        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}

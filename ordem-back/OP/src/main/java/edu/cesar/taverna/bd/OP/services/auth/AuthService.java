package edu.cesar.taverna.bd.OP.services.auth;

import edu.cesar.taverna.bd.OP.dao.VerissimoDAO;
import edu.cesar.taverna.bd.OP.entity.Verissimo;
import org.springframework.stereotype.Service;

import java.sql.SQLException;

@Service
public class AuthService {

    private final VerissimoDAO verissimoDAO;

    public AuthService () {
        this.verissimoDAO = new VerissimoDAO();
    }

    public boolean authenticate(String login, String password) {
        try {
            Verissimo v = verissimoDAO.findByLogin(login);
            return v != null && v.getPassword().equals(password);
        } catch (SQLException e) {
            // Logue ou trate conforme seu padrão
            return false;
        }
    }
}

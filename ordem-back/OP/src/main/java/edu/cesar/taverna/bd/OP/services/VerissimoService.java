package edu.cesar.taverna.bd.OP.services;

import edu.cesar.taverna.bd.OP.dao.VerissimoDAO;
import edu.cesar.taverna.bd.OP.entity.Verissimo;
import org.springframework.http.ResponseEntity;

public class VerissimoService extends AgentService {
    private final VerissimoDAO verissimoDAO = new VerissimoDAO();
    
    public void register(Verissimo verissimo){
         if (verissimo.getLogin() == null){
            verissimo.setLogin( );
        }
         super.register(verissimo);
    }


}

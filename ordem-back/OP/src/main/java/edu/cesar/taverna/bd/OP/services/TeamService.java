package edu.cesar.taverna.bd.OP.services;

import edu.cesar.taverna.bd.OP.dao.TeamDAO;
import edu.cesar.taverna.bd.OP.entity.Team;

public class TeamService {

    private  final TeamDAO teamDAO = new TeamDAO();

    public void register(Team team){

        teamDAO.save(team);
    }
}

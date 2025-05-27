package edu.cesar.taverna.bd.OP.services;

import edu.cesar.taverna.bd.OP.DTO.*;
import edu.cesar.taverna.bd.OP.dao.QGDAO;
import org.springframework.web.client.RestTemplate;


import java.sql.SQLException;
import java.util.*;

public class QGService {

    private final QGDAO hqDAO = new QGDAO();
    private Map<String, ThreatElementOnGeoCord> cepCache = new HashMap<>();

    public List<TeamsSpecializationsInHQ> getSpecializationsInHQ(UUID id){
        return hqDAO.getSpecializationsInHQ(id);
    }

    public List<MissionByStatusDTO> getMissionByStatus(UUID id) {
        return hqDAO.getMissionsByStatus(id);
    }

    public List<NexByHqDTO> getMeanNexByHQ(){
        return hqDAO.getNexbyHQ();
    }

    public List<AgentsBySpecializationDTO> getAgentsBySpecializationInHq(UUID id) {
        return hqDAO.getSpecializationsAgents(id);
    }
    public List<RankAgentsDTO> getRankAgentsByHQ(UUID id){
        return hqDAO.getRankAgentsByHQ(id);
    }

    public FinishedMissionDTO getFinishedMissions(UUID id, int month, int year){
        return hqDAO.getFinishedMissions(id, month, year);
    }

    public ActiveAgentsDTO getActiveAgents(UUID id) {
        return hqDAO.getActiveAgents(id);
    }

    public OpenMissionsDTO getOpenMissions(UUID id) {
        return hqDAO.getOpenMissions(id);
    }

    public MissionAvgDurationDTO getMissionAverageDuration(UUID id, int month, int year) {
        return hqDAO.getMissionAverageDuration(id, month, year);
    }

    public VerissimoDTO getVerissimoHQ(UUID id) {
        return hqDAO.getVerissimoHQ(id);
    }


    public List<ThreatElementOnGeoCord> getThreatElementCord() throws SQLException {
        List<ThreatElementOnCEP> listOnCep = hqDAO.getThreatElementOnCEP();
        List<ThreatElementOnGeoCord> listOnGeoCord = new ArrayList<>();

        String url = "https://cep.awesomeapi.com.br/json/";
        RestTemplate restTemplate = new RestTemplate();

        for (ThreatElementOnCEP threat : listOnCep) {
            String cep = threat.cep();
            ThreatElementOnGeoCord response;

            if (cepCache.containsKey(cep)) {
//                System.out.println("pegou do cache");
                response = new ThreatElementOnGeoCord(cepCache.get(cep));
            }
            else {
//                System.out.println("pediu request");
                response = restTemplate.getForObject(url + cep, ThreatElementOnGeoCord.class);
                if (response != null) {
                    cepCache.put(cep, response);
                }
            }

            if (response != null) {
                response.setElement(threat.element());
                listOnGeoCord.add(response);
            }
        }
//            System.out.println("--------------------------\n");

        return listOnGeoCord;
    }

}

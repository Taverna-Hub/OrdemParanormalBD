package edu.cesar.taverna.bd.OP.services;

import edu.cesar.taverna.bd.OP.DTO.*;
import edu.cesar.taverna.bd.OP.dao.QGDAO;
import org.springframework.web.client.RestTemplate;

import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

public class QGService {

    private final QGDAO hqDAO = new QGDAO();

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

    public List<ThreatElementOnGeoCord> getThreatElementCord() throws SQLException{
        List<ThreatElementOnCEP> listOnCep = hqDAO.getThreatElementOnCEP();
        List<ThreatElementOnGeoCord> listOnGeoCord = new ArrayList<>();

        String url = "https://cep.awesomeapi.com.br/json/";
        RestTemplate restTemplate = new RestTemplate();

        listOnCep.forEach(threat -> {

            ThreatElementOnGeoCord response = restTemplate.getForObject(url+threat.cep(), ThreatElementOnGeoCord.class);
            assert response != null;
            response.setElement(threat.element());
            listOnGeoCord.add(response);
        });
        return listOnGeoCord;
    }
}

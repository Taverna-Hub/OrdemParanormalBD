package edu.cesar.taverna.bd.OP.services;

import edu.cesar.taverna.bd.OP.DTO.*;
import edu.cesar.taverna.bd.OP.dao.QGDAO;

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
}

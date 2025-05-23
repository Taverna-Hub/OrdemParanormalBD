package edu.cesar.taverna.bd.OP.services;

import edu.cesar.taverna.bd.OP.DTO.AgentsBySpecializationDTO;
import edu.cesar.taverna.bd.OP.DTO.MissionWithTeamDTO;
import edu.cesar.taverna.bd.OP.DTO.ThreatByMissionDTO;
import edu.cesar.taverna.bd.OP.dao.MissionDAO;
import edu.cesar.taverna.bd.OP.entity.Agent;
import edu.cesar.taverna.bd.OP.entity.Mission;
import edu.cesar.taverna.bd.OP.entity.ThreatNeutralization;
import org.springframework.http.ResponseEntity;

import java.sql.SQLException;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

public class MissionService {
    private  final MissionDAO missionDAO = new MissionDAO();

    public ResponseEntity<String> register(Mission mission){
        missionDAO.save(mission);
        return ResponseEntity.ok("");
    }

    public ResponseEntity<String> updateMission(Mission mission) {
        missionDAO.update(mission);
        return ResponseEntity.ok("Missão atualizado com sucesso");
    }


    public List<Mission> getAllMissions() throws SQLException {
        return missionDAO.getAll();
    }

    public List<Mission> getAllMissionsByHQ(UUID id){
        return missionDAO.getAllFromHQ(id);
    }

    public List<MissionWithTeamDTO> getAllMissionsWithTeam(UUID id){
        return missionDAO.getAllFromHQWithTeam(id);
    }

    public Optional<Mission> getMissionById(UUID id) {
        return Optional.ofNullable(missionDAO.searchByID(id));
    }

    public List<AgentsBySpecializationDTO> getAgentsSpecializationInMission(UUID id_hq, UUID id_mission) {
        return missionDAO.getAgentSpecializationMission(id_hq, id_mission);
    }

    public List<ThreatByMissionDTO> getThreatsByMission(UUID id_mission) {
        return missionDAO.getThreatsByMission(id_mission);
    }

    public List<ThreatNeutralization> getThreatsNeutralizationByMission(UUID id_mission) {
        return missionDAO.getThreatNeutralizationByMission(id_mission);
    }
}

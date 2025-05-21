package edu.cesar.taverna.bd.OP.DTO;

import java.util.Date;
import java.util.UUID;

public record MissionWithTeamDTO(
        UUID id_mission,
        String title,
        String status,
        String objective,
        String risks,
        Date start_date,
        Date end_date,
        UUID id_address,
        UUID id_hq,
        String team_name
) {}
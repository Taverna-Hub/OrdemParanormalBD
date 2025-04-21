package edu.cesar.taverna.bd.OP.entity;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MissionAssignment {
    private UUID id_team;
    private UUID id_mission;
    private LocalDate allocation_date;
    private LocalDate deallocation_date;

    @JsonCreator
    public MissionAssignment(
            @JsonProperty("id_team") String id_team,
            @JsonProperty("id_mission") String id_mission,
            @JsonProperty("allocation_date")LocalDate allocation_date,
            @JsonProperty("deallocation_date")LocalDate deallocation_date)
    {
        this.id_team = UUID.fromString(id_team);
        this.id_mission = UUID.fromString(id_mission);
        this.allocation_date = allocation_date;
        this.deallocation_date = deallocation_date;
    }
}

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
public class Mission {
    private UUID id_mission;
    private String title;
    private String status;
    private String risks;
    private String objective;
    private LocalDate start_date;
    private LocalDate end_date;

    @JsonCreator
    public Mission(
                   @JsonProperty("title") String title,
                   @JsonProperty("status") String status,
                   @JsonProperty("risks")String risks,
                   @JsonProperty("objective")String objective,
                   @JsonProperty("start_date")LocalDate start_date,
                   @JsonProperty("end_date")LocalDate end_date)

    {
        this.title = title;
        this.status = status;
        this.risks = risks;
        this.objective = objective;
        this.start_date = start_date;
        this.end_date = end_date;
        setId();
    }

    private void setId() {
        this.id_mission = UUID.randomUUID();
    }

}

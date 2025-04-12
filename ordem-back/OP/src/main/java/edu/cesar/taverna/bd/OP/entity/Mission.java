package edu.cesar.taverna.bd.OP.entity;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Mission {
    private UUID id_mission;
    private String title;
    private String status;
    private String report;
    private String risks;
    private String objective;
    private String location;

    @JsonCreator
    public Mission(
                   @JsonProperty("title") String title,
                   @JsonProperty("status") String status,
                   @JsonProperty("report")String report ,
                   @JsonProperty("risks")String risks,
                   @JsonProperty("objective")String objective,
                   @JsonProperty("location")String location){
        this.title = title;
        this.status = status;
        this.report = report;
        this.risks = risks;
        this.objective = objective;
        this.location = location;
        setId();
    }

    private void setId() {
        this.id_mission = UUID.randomUUID();
    }

}

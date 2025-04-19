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
public class Element {
    private UUID id_element;
    private String name;
    private String desciption;
    private UUID vantagem;
    @JsonCreator
    public Element (@JsonProperty String name){
        this.name = name;
    }
}

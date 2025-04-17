package edu.cesar.taverna.bd.OP.entity;

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


}

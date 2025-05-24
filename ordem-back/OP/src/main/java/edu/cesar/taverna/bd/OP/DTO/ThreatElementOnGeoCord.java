package edu.cesar.taverna.bd.OP.DTO;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

@JsonIgnoreProperties(ignoreUnknown = true)
@Data
public class ThreatElementOnGeoCord {
    private String element;
    private String lat;
    private String lng;
}

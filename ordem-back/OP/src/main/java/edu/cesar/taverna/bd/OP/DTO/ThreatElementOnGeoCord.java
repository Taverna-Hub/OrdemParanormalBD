package edu.cesar.taverna.bd.OP.DTO;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@JsonIgnoreProperties(ignoreUnknown = true)
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ThreatElementOnGeoCord {
    private String element;
    private String lat;
    private String lng;
    public ThreatElementOnGeoCord(ThreatElementOnGeoCord threatElementOnGeoCord){
        this.element = threatElementOnGeoCord.getElement();
        this.lat = threatElementOnGeoCord.getLat();
        this.lng = threatElementOnGeoCord.getLng();
    }
}

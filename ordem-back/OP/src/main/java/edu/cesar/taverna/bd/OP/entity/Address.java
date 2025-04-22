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
public class Address {
    private UUID id_address;
    private String street;
    private int number;
    private String neighborhood;
    private String city;
    private String state;
    private String postal_code;

    @JsonCreator
    public Address(
            @JsonProperty("street") String street,
            @JsonProperty("number") Integer number,
            @JsonProperty("neighborhood") String neighborhood,
            @JsonProperty("city") String city,
            @JsonProperty("state") String state,
            @JsonProperty("postal_code") String postal_code) {
        this.street = street;
        this.number = number;
        this.neighborhood = neighborhood;
        this.city = city;
        this.state = state;
        this.postal_code = postal_code;
        this.id_address = UUID.randomUUID();
    }
}

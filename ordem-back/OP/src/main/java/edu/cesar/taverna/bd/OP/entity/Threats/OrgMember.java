package edu.cesar.taverna.bd.OP.entity.Threats;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrgMember {
    private UUID id_member;
//    private UUID id_organization;
    private String name;
    private String role;

    @JsonCreator
    public OrgMember(@JsonProperty("name") String name,
                     @JsonProperty("role") String role){
        this(UUID.randomUUID(), name, role);
    }
}

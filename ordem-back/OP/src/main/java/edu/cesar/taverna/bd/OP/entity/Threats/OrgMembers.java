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
public class OrgMembers {
    private UUID id_member;
    private UUID id_organization;
    private String name;
    private String role;

    @JsonCreator
    public OrgMembers(@JsonProperty("name") String name,
                      @JsonProperty("role") String role,
                      @JsonProperty("id_organization") String id_organization){
        this(UUID.randomUUID(), UUID.fromString(id_organization), name, role);
    }
}

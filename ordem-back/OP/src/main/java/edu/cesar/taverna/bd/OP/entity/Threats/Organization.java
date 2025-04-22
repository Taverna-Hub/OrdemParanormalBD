package edu.cesar.taverna.bd.OP.entity.Threats;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;
@EqualsAndHashCode(callSuper = true)
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Organization extends Threat {
    private List<OrgMember> members;  // Lista de membros da organização

    @JsonCreator
    public Organization(@JsonProperty("names") List<String> names,
                        @JsonProperty("description") String description,
                        @JsonProperty("elements") List<String> elements,
                        @JsonProperty("members") List<OrgMember> members) {
        super(names, description, elements);
        this.members = members != null ? members : new ArrayList<>();
    }


}

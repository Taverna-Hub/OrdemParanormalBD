package edu.cesar.taverna.bd.OP.DTO;

import java.util.List;

public record UpdateOrganizationDTO(String id_threat,
                                    List<String> new_names,
                                    String new_description,
                                    List<String> new_elements) {
}

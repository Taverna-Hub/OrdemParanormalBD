package edu.cesar.taverna.bd.OP.DTO;

import java.util.List;

public record UpdateParanormalEntityDTO(String id_threat,
                                        List<String> new_names,
                                        List<String> new_abilities,
                                        String new_description,
                                        String new_enigma,
                                        List<String> new_elements) {
}

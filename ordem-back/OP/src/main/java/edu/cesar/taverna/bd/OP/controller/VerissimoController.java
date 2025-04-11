package edu.cesar.taverna.bd.OP.controller;

import edu.cesar.taverna.bd.OP.services.VerissimoService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/Verissimo")
public class VerissimoController {
    private final VerissimoService verissimoService = new VerissimoService();

    //TODO


}

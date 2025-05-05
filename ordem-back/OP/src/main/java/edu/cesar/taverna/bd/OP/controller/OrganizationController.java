package edu.cesar.taverna.bd.OP.controller;

import edu.cesar.taverna.bd.OP.entity.Threats.OrgMember;
import edu.cesar.taverna.bd.OP.entity.Threats.Organization;
import edu.cesar.taverna.bd.OP.services.OrganizationService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.UUID;


@RestController
@RequestMapping("/organization")
public class OrganizationController extends GenericController<Organization, OrganizationService>{
    public OrganizationController() {
        super(new OrganizationService());
    }


    @Override
    protected ResponseEntity<String> performRegister(Organization entity) {
        return service.register(entity);
    }

    @Override
    public ResponseEntity<List<Organization>> getAll() throws SQLException {
        List<Organization> list = service.getAll();
        return ResponseEntity
                .ok()                   // status 200
                .body(list);            // corpo = sua lista
    }

    @Override
    public ResponseEntity<Organization> getById(@PathVariable UUID id) throws SQLException {
        System.out.println("Controller recebeu ID: " + id);

        Optional<Organization> optionalOrg = service.getById(id);

        return optionalOrg
                .map(org -> ResponseEntity.ok().body(org))      // se estiver presente, retorna 200 com a org
                .orElseGet(() -> ResponseEntity.notFound().build()); // senão, 404
    }

    @Override
    public ResponseEntity<String> update(UUID id, Organization entity) {
        return null;
    }

    @Override
    public ResponseEntity<String> delete(UUID id) {
        return null;
    }

    @PostMapping("/add/{id}")
    public ResponseEntity<String> addMember(@PathVariable UUID id, @RequestBody OrgMember member) throws SQLException {
        return service.addMember(id, member);
    }

    @DeleteMapping("/remove/{id}")
    public ResponseEntity<String> removeMember(@RequestBody Map<String, UUID> payload) throws SQLException {
        UUID id_org = payload.get("id_org");
        UUID id_member = payload.get("id_member");
        return service.removeMember(id_org, id_member);
    }
}

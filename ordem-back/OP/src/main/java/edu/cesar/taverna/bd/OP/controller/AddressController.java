package edu.cesar.taverna.bd.OP.controller;

import edu.cesar.taverna.bd.OP.entity.Address;
import edu.cesar.taverna.bd.OP.entity.Agent;
import edu.cesar.taverna.bd.OP.services.AddressService;
import edu.cesar.taverna.bd.OP.services.AgentService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.sql.SQLException;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/address")
public class AddressController extends GenericController<Address, AddressService> {
    public AddressController(){
        super(new AddressService());
    }

    @Override
    protected ResponseEntity<String> performRegister(Address address) {
       return service.register(address);
    }

    @Override
    public ResponseEntity<List<Address>> getAll() throws SQLException {
        return ResponseEntity.ok(service.getAllAddressess());
    }

    @Override
    public ResponseEntity<Address> getById(UUID id) {
        return service.getAddressById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @Override
    public ResponseEntity<String> update(UUID id, Address address) {
        try {
            address.setId_address(id);
            service.updateAddress(address);
            return ResponseEntity.ok("Address updated successfully.");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Failed to update agent." + e);
        }
    }

    @Override
    public ResponseEntity<String> delete(UUID id) {
        try {
            service.deleteAddress(id);
            return ResponseEntity.ok("Address deleted successfully.");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Failed to delete address.");
        }
    }
}

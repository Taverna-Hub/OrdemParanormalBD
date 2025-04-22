package edu.cesar.taverna.bd.OP.services;

import edu.cesar.taverna.bd.OP.dao.AddressDAO;
import edu.cesar.taverna.bd.OP.dao.AgentDAO;
import edu.cesar.taverna.bd.OP.entity.Address;
import edu.cesar.taverna.bd.OP.entity.Agent;

import java.sql.SQLException;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

public class AddressService {
    private final AddressDAO addressDAO = new AddressDAO();

    public void register(Address address){
        addressDAO.save(address);
    }

    public List<Address> getAllAddressess() throws SQLException {
        return addressDAO.getAll();
    }

    public Optional<Address> getAddressById(UUID id) {
        return Optional.ofNullable(addressDAO.searchByID(id));
    }

    public void updateAddress(Address address) {
        addressDAO.update(address);
    }

    public void deleteAddress(UUID id) {
        addressDAO.delete(id);
    }

}

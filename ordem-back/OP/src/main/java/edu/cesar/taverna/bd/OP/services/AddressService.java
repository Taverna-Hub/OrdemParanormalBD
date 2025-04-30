package edu.cesar.taverna.bd.OP.services;

import edu.cesar.taverna.bd.OP.dao.AddressDAO;
import edu.cesar.taverna.bd.OP.entity.Address;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.sql.SQLException;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

public class AddressService {
    private final AddressDAO addressDAO = new AddressDAO();

    private ResponseEntity<String> verify(Address address){

        if (address.getCity().isBlank()){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Insira a cidade");
        }
        if (address.getState().isBlank()){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Insira o estado");
        }
        if (address.getNeighborhood().isBlank()){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Insira o bairro");
        }
        if (address.getStreet().isBlank()){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Insira a rua");
        }
        System.out.println(address.getPostal_code());
        if (!address.getPostal_code().matches("^\\d{5}-\\d{3}$")){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Insira um CEP valido");
        }

        return null;
    }

    public ResponseEntity<String> register(Address address){

        while (addressDAO.searchByID(address.getId_address() ) != null){
            address.setId_address(UUID.randomUUID());
        }
        ResponseEntity<String> verified =  verify(address);
        if (verified != null){
            return verified;
        }

        addressDAO.save(address);
        return ResponseEntity.ok("Endereço adicionado");
    }

    public List<Address> getAllAddressess() throws SQLException {
        return addressDAO.getAll();
    }

    public Optional<Address> getAddressById(UUID id) {
        return Optional.ofNullable(addressDAO.searchByID(id));
    }

    public ResponseEntity<String>  updateAddress(Address address) {
        ResponseEntity<String> verified =  verify(address);
        if (verified != null){
            return verified;
        }
        addressDAO.update(address);
        return ResponseEntity.ok("Endereço atualizado com sucesso");
    }

    public ResponseEntity<String>  deleteAddress(UUID id) {
        addressDAO.delete(id);
        return ResponseEntity.ok("Endereço excluido com sucesso");
    }

}

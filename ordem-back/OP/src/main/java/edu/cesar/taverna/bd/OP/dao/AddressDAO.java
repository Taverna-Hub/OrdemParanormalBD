package edu.cesar.taverna.bd.OP.dao;

import edu.cesar.taverna.bd.OP.entity.Address;
import edu.cesar.taverna.bd.OP.entity.Agent;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.UUID;

public class AddressDAO extends GenericDAO<Address> {
    @Override
    protected String getInsertSQL() {
        return "INSERT INTO ADDRESS (street, number, neighborhood, city, state, postal_code, id_address) VALUES (?, ?, ?, ?, ?, ?, ?)";
    }

    @Override
    protected String getSelectByIdSQL() {
        return "SELECT * FROM ADDRESS WHERE id_address = ?";
    }

    @Override
    protected String getSelectAllSQL() {
        return "SELECT * FROM ADDRESS";
    }

    @Override
    protected String getDeleteSQL() {
        return "DELETE FROM ADDRESS WHERE id_address = ?";
    }

    @Override
    protected String getUpdateSQL() {
        return "UPDATE ADDRESS SET street = ?, number = ?, neighborhood = ?, city = ?, state = ?, postal_code = ? WHERE id_agent = ?";
    }

    @Override
    protected void prepareInsert(PreparedStatement stmt, Address address) throws SQLException {
        stmt.setString(1, address.getStreet());
        stmt.setInt(2, address.getNumber());
        stmt.setString(3, address.getNeighborhood());
        stmt.setString(4, address.getCity());
        stmt.setString(5, address.getState());
        stmt.setString(6, address.getPostal_code());
        stmt.setString(7, address.getId_address().toString());
    }

    @Override
    protected void prepareUpdate(PreparedStatement stmt, Address address) throws SQLException {
        this.prepareInsert(stmt, address);
    }


    @Override
    protected Address mapResultSetToEntity(ResultSet rs) throws SQLException {
        Address address = new Address();

        address.setId_address(UUID.fromString(rs.getString("id_address")));
        address.setStreet(rs.getString("street"));
        address.setNumber(rs.getInt("number"));
        address.setNeighborhood(rs.getString("neighborhood"));
        address.setCity(rs.getString("city"));
        address.setState(rs.getString("state"));
        address.setPostal_code(rs.getString("postal_code"));
        return address;
    }
}

package edu.cesar.taverna.bd.OP.services;

import edu.cesar.taverna.bd.OP.dao.ElementDAO;
import edu.cesar.taverna.bd.OP.entity.Element;

import java.sql.SQLException;
import java.util.List;
import java.util.UUID;
public class ElementService {

private final ElementDAO elementDAO = new ElementDAO();
    public Element getElementById(String name){
        return elementDAO.searchByID(name);
    }

    public List<Element> getAllElements() {
        try {
            return elementDAO.getAll();
        } catch (SQLException e) {
            throw new RuntimeException("Erro ao buscar todos os elementos", e);
        }
    }

}

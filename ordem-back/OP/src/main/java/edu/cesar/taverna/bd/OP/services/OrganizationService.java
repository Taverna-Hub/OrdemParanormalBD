package edu.cesar.taverna.bd.OP.services;

import edu.cesar.taverna.bd.OP.dao.OrganizationDAO;
import edu.cesar.taverna.bd.OP.entity.Threats.OrgMember;
import edu.cesar.taverna.bd.OP.entity.Threats.Organization;

import java.sql.SQLException;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

public class OrganizationService {
    private final OrganizationDAO organizationDAO = new OrganizationDAO();

    public void register(Organization organization){
        organizationDAO.save(organization);
    }

    public List<Organization> getAll() throws SQLException {
        return organizationDAO.getAll();
    }

    public Optional<Organization> getById(UUID id) throws SQLException {
        return organizationDAO.getById(id);
    }


    public void update(Organization organization){
        organizationDAO.update(organization);
    }

    public void delete(UUID id){
        organizationDAO.delete(id);
    }
    public void addMember(UUID id_org, OrgMember member) throws SQLException {
        organizationDAO.addMember(id_org, member);
    }
    public void removeMember(UUID id_org, UUID member) throws SQLException {
        organizationDAO.removeMember(id_org, member);
    }


}

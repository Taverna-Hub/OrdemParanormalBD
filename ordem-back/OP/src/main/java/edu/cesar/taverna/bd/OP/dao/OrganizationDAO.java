package edu.cesar.taverna.bd.OP.dao;

import edu.cesar.taverna.bd.OP.DTO.MembersOrganizationDTO;
import edu.cesar.taverna.bd.OP.DTO.UpdateOrganizationDTO;
import edu.cesar.taverna.bd.OP.config.ConnectionFactory;
import edu.cesar.taverna.bd.OP.entity.Threats.OrgMember;
import edu.cesar.taverna.bd.OP.entity.Threats.Organization;

import java.sql.*;
import java.util.*;

public class OrganizationDAO extends GenericDAO<Organization> {
    @Override
    protected String getInsertSQL() {
        return "INSERT INTO PARANORMAL_ORGANIZATION (id_organization) VALUES (?)";
    }

    @Override
    protected String getSelectByIdSQL() {
        return "";
    }

    @Override
    protected String getSelectAllSQL() {
        return null;
    }

    public List<Organization> getAll() throws SQLException {
        String sql = """

                        SELECT\s
                    po.id_organization AS org_id,
                    t.description AS org_description,
                    tn.name AS threat_name,
                    te.id_element AS element_id,
                    e.name AS element_name,  -- Nome do elemento vindo da tabela ELEMENTS
                    m.id_member AS member_id,
                    m.name AS member_name,
                    m.role AS member_role
                FROM PARANORMAL_ORGANIZATION po
                JOIN THREATS t ON po.id_organization = t.id_threat
                LEFT JOIN THREATS_NAMES tn ON t.id_threat = tn.id_threat
                LEFT JOIN THREAT_ELEMENTS te ON t.id_threat = te.id_threat
                LEFT JOIN ELEMENTS e ON te.id_element = e.id_element  -- Junção com a tabela ELEMENTS para pegar o nome
                LEFT JOIN MEMBERS m ON po.id_organization = m.id_organization;
                """;

        // Mapa para agrupar por UUID do threat/org
        Map<UUID, Organization> orgMap = new LinkedHashMap<>();

        try (Connection conn = ConnectionFactory.getConnection();
                PreparedStatement ps = conn.prepareStatement(sql);
                ResultSet rs = ps.executeQuery()) {

            while (rs.next()) {
                // Converte a PK para UUID
                UUID orgId = UUID.fromString(rs.getString("org_id"));

                // Se ainda não existe, cria e inicializa listas
                Organization org = orgMap.computeIfAbsent(orgId, id -> {
                    Organization o = new Organization();
                    o.setId_threat(id);
                    try {
                        o.setDescription(rs.getString("org_description"));
                    } catch (SQLException e) {
                        throw new RuntimeException(e);
                    }
                    o.setNames(new ArrayList<>());
                    o.setElements(new ArrayList<>());
                    o.setElementsNames(new ArrayList<>());
                    o.setMembers(new ArrayList<>());
                    return o;
                });

                // Popula nomes (THREATS_NAMES)
                String threatName = rs.getString("threat_name");
                if (threatName != null && !org.getNames().contains(threatName)) {
                    org.getNames().add(threatName);
                }

                // Popula elementos (THREAT_ELEMENTS)
                String elemIdStr = rs.getString("element_id");
                if (elemIdStr != null) {
                    UUID elemId = UUID.fromString(elemIdStr);
                    if (!org.getElements().contains(elemId)) {
                        org.getElements().add(elemId);
                    }
                }
                String elemenName = rs.getString("element_name");
                if (elemenName != null) {
                    if (!org.getElementsNames().contains(elemenName)) {
                        org.getElementsNames().add(elemenName);
                    }
                }

                // Se houver MEMBER, adiciona à lista
                String memberIdStr = rs.getString("member_id");
                if (memberIdStr != null) {
                    OrgMember m = new OrgMember();
                    m.setId_member(UUID.fromString(memberIdStr));
                    m.setName(rs.getString("member_name"));
                    m.setRole(rs.getString("member_role"));
                    org.getMembers().add(m);
                }
            }
        } catch (SQLException ex) {
            throw new SQLException(ex);
        }

        // Retorna em ordem de inserção (LinkedHashMap)
        return new ArrayList<>(orgMap.values());
    }

    public Optional<Organization> getById(UUID id) throws SQLException {
        // Recupera todas as organizações usando o mé
        List<Organization> organizations = getAll();

        // Filtra a lista de organizações pelo ID (se encontrado)
        return organizations.stream()
                .filter(org -> org.getId_threat().equals(id))
                .findFirst(); // Retorna a primeira organização encontrada com o ID
    }

    @Override
    protected String getDeleteSQL() {
        return "";
    }

    @Override
    protected String getUpdateSQL() {
        return "";
    }

    @Override
    protected void prepareInsert(PreparedStatement stmt, Organization organization) throws SQLException {
        stmt.setString(1, String.valueOf(organization.getId_threat()));
    }

    @Override
    public void save(Organization organization) {
        System.out.println("no save");
        try (Connection conn = ConnectionFactory.getConnection()) {
            conn.setAutoCommit(false);

            try (
                    PreparedStatement stmt1 = conn
                            .prepareStatement("INSERT INTO THREATS (id_threat, description) VALUES (?, ?)");
                    PreparedStatement stmt2 = conn.prepareStatement(getInsertSQL())) {
                stmt1.setString(1, organization.getId_threat().toString());
                stmt1.setString(2, organization.getDescription());
                stmt1.executeUpdate();

                prepareInsert(stmt2, organization);
                stmt2.executeUpdate();

                addDependencies(conn, organization);

                conn.commit();
            } catch (SQLException e) {
                conn.rollback();
                throw new RuntimeException("Error saving entity", e);
            }
        } catch (SQLException e) {
            throw new RuntimeException("Error connecting to the database", e);
        }
    }

    public void addDependencies(Connection conn, Organization organization) throws SQLException {
        try (
                PreparedStatement stmt1 = conn
                        .prepareStatement("INSERT INTO THREAT_ELEMENTS (id_element, id_threat) VALUES (?, ?);");
                PreparedStatement stmt2 = conn
                        .prepareStatement("INSERT INTO THREATS_NAMES (id_threat, name) VALUES (?, ?);");) {
            for (UUID element : organization.getElements()) {
                stmt1.setString(1, element.toString());
                stmt1.setString(2, organization.getId_threat().toString());
                stmt1.executeUpdate();
            }

            for (String name : organization.getNames()) {
                stmt2.setString(1, organization.getId_threat().toString());
                stmt2.setString(2, name);
                stmt2.executeUpdate();
            }

        }
    }

    @Override
    protected void prepareUpdate(PreparedStatement stmt, Organization entity) throws SQLException {

    }

    @Override
    protected Organization mapResultSetToEntity(ResultSet rs) throws SQLException {
        return null;
    }

    public void addMember(UUID id_org, OrgMember member) throws SQLException {
        try (Connection conn = ConnectionFactory.getConnection()) {

            String stmt_SQL = "INSERT INTO MEMBERS (id_member, id_organization, name, role) VALUES (?, ?, ?, ?)";
            try (PreparedStatement stmt = conn.prepareStatement(stmt_SQL)) {
                stmt.setString(1, String.valueOf(member.getId_member()));
                stmt.setString(2, String.valueOf(id_org));
                stmt.setString(3, member.getName());
                stmt.setString(4, member.getRole());

                stmt.executeUpdate();
            } catch (SQLException e) {
                throw new RuntimeException("Error saving entity", e);

            }
        }

    }

    public void removeMember(UUID id_org, UUID id_member) throws SQLException {
        try (Connection conn = ConnectionFactory.getConnection()) {

            String stmt_SQL = "DELETE FROM MEMBERS WHERE id_member = ? AND id_organization = ?";
            try (PreparedStatement stmt = conn.prepareStatement(stmt_SQL)) {
                stmt.setString(1, String.valueOf(id_member));
                stmt.setString(2, String.valueOf(id_org));

                stmt.executeUpdate();
            } catch (SQLException e) {
                throw new RuntimeException("Error saving entity", e);

            }
        }
    }

    public List<MembersOrganizationDTO> listMembers(UUID id_org) throws SQLException {
        String sql = """
                SELECT m.id_member, m.name, m.role
                FROM MEMBERS m
                WHERE m.id_organization = ?;
                """;

        List<MembersOrganizationDTO> list = new ArrayList<>();

        try (Connection conn = ConnectionFactory.getConnection();
                PreparedStatement stmt = conn.prepareStatement(sql)) {
            stmt.setString(1, id_org.toString());

            try (ResultSet rs = stmt.executeQuery()) {
                while (rs.next()) {
                    String id_member = rs.getString("id_member");
                    String memberName = rs.getString("name");
                    String memberRole = rs.getString("role");

                    list.add(new MembersOrganizationDTO(memberName, memberRole, id_member));

                }

                return list;

            } catch (SQLException e) {
                throw new RuntimeException(e);
            }
        }
    }

    public void updateOrganization(UpdateOrganizationDTO updateOrganizationDTO) throws SQLException {
        Connection conn = ConnectionFactory.getConnection();
        PreparedStatement stmt = null;

        try {
            conn.setAutoCommit(false);

            stmt = conn.prepareStatement("DELETE FROM THREATS_NAMES WHERE id_threat = ?");
            stmt.setString(1, updateOrganizationDTO.id_threat());
            stmt.executeUpdate();
            stmt.close();

            stmt = conn.prepareStatement("DELETE FROM THREAT_ELEMENTS WHERE id_threat = ?");
            stmt.setString(1, updateOrganizationDTO.id_threat());
            stmt.executeUpdate();
            stmt.close();

            stmt = conn.prepareStatement("INSERT INTO THREATS_NAMES (id_threat, name) VALUES (?, ?)");
            for (String name : updateOrganizationDTO.new_names()) {
                stmt.setString(1, updateOrganizationDTO.id_threat());
                stmt.setString(2, name);
                stmt.executeUpdate();
            }
            stmt.close();

            stmt = conn.prepareStatement("INSERT INTO THREAT_ELEMENTS (id_element, id_threat) VALUES (?, ?)");
            for (String element : updateOrganizationDTO.new_elements()) {
                stmt.setString(1, element);
                stmt.setString(2, updateOrganizationDTO.id_threat());
                stmt.executeUpdate();
            }
            stmt.close();

            if (updateOrganizationDTO.new_description() != null) {
                stmt = conn.prepareStatement("UPDATE THREATS SET description = ? WHERE id_threat = ?");
                stmt.setString(1, updateOrganizationDTO.new_description());
                stmt.setString(2, updateOrganizationDTO.id_threat());
                stmt.executeUpdate();
                stmt.close();
            }

            conn.commit();
        } catch (SQLException e) {
            if (conn != null) {
                conn.rollback();
            }
            throw e;
        } finally {
            if (stmt != null)
                stmt.close();
            if (conn != null)
                conn.close();
        }
    }
}
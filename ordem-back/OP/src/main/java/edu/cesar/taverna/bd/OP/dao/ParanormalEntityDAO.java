package edu.cesar.taverna.bd.OP.dao;

import edu.cesar.taverna.bd.OP.config.ConnectionFactory;
import edu.cesar.taverna.bd.OP.entity.Threats.ParanormalEntity;

import java.sql.*;
import java.util.*;

public class ParanormalEntityDAO extends GenericDAO<ParanormalEntity> {




    @Override
    protected String getInsertSQL() {
        return "INSERT INTO PARANORMAL_ENTITY (id_entity, enigma) VALUES (?, ?)";
    }

    @Override
    protected String getSelectByIdSQL() {
        return null;
    }

    @Override
    protected String getSelectAllSQL() {
        return null;
    }

    @Override
    protected String getDeleteSQL() {
        return """
                DELETE FROM ENTITY_ABILITY WHERE id_entity = ?;
                DELETE FROM PARANORMAL_ENTITY WHERE id_entity = ?;
                DELETE FROM THREAT_ELEMENTS WHERE id_threat = ?;
                DELETE FROM THREATS_NAMES WHERE id_threat = ?;
                DELETE FROM THREATS WHERE id_threat = ?;""";
    }

    @Override
    protected String getUpdateSQL() {
        return """
                UPDATE THREATS SET description = ? WHERE id_threat = ?;
                UPDATE PARANORMAL_ENTITY SET enigma = ? WHERE id_entity = ?;
                """;
    }

    @Override
    protected void prepareInsert(PreparedStatement stmt, ParanormalEntity entity) throws SQLException {
        stmt.setString(1, entity.getId_threat().toString());
        stmt.setString(2, entity.getEnigma());
    }

    @Override
    public void save(ParanormalEntity entity) {
        try (Connection conn = ConnectionFactory.getConnection()) {
            conn.setAutoCommit(false);

            try (
                    PreparedStatement stmt1 = conn.prepareStatement("INSERT INTO THREATS (id_threat, description) VALUES (?, ?)");
                    PreparedStatement stmt2 = conn.prepareStatement(getInsertSQL())
            ) {
                stmt1.setString(1, entity.getId_threat().toString());
                stmt1.setString(2, entity.getDescription());
                stmt1.executeUpdate();

                prepareInsert(stmt2, entity);
                stmt2.executeUpdate();

                addDependencies(conn, entity);

                conn.commit();
            } catch (SQLException e) {
                conn.rollback();
                throw new RuntimeException("Error saving entity", e);
            }
        } catch (SQLException e) {
            throw new RuntimeException("Error connecting to the database", e);
        }
    }

    public void addDependencies(Connection conn, ParanormalEntity entity) throws SQLException {
        try (
                PreparedStatement stmt1 = conn.prepareStatement("INSERT INTO THREAT_ELEMENTS (id_element, id_threat) VALUES (?, ?);");
                PreparedStatement stmt2 = conn.prepareStatement("INSERT INTO THREATS_NAMES (id_threat, name) VALUES (?, ?);");
                PreparedStatement stmt3 = conn.prepareStatement("INSERT INTO ENTITY_ABILITY (id_entity, ability) VALUES (?, ?);");
        ) {
            for (UUID element : entity.getElements()) {
                stmt1.setString(1, element.toString());
                stmt1.setString(2, entity.getId_threat().toString());
                stmt1.executeUpdate();
            }

            for (String name : entity.getNames()) {
                stmt2.setString(1, entity.getId_threat().toString());
                stmt2.setString(2, name);
                stmt2.executeUpdate();
            }

            for (String ability : entity.getAbilities()) {
                stmt3.setString(1, entity.getId_threat().toString());
                stmt3.setString(2, ability);
                stmt3.executeUpdate();
            }
        }
    }


    @Override
    protected void prepareUpdate(PreparedStatement stmt, ParanormalEntity entity) throws SQLException {
        stmt.setString(1, entity.getDescription());
        stmt.setString(2, entity.getId_threat().toString());
        stmt.setString(3, entity.getEnigma());
        stmt.setString(4, entity.getId_threat().toString());
    }

    @Override
    public void update(ParanormalEntity entity) {
        try (Connection conn = ConnectionFactory.getConnection()) {
            conn.setAutoCommit(false);

            try (PreparedStatement stmt = conn.prepareStatement(getUpdateSQL())) {
                prepareUpdate(stmt, entity);
                stmt.executeUpdate();

                updateDependencies(conn, entity);

                conn.commit();
            } catch (SQLException e) {
                conn.rollback();
                throw new RuntimeException("Error updating entity", e);
            }
        } catch (SQLException e) {
            throw new RuntimeException("Error connecting to the database", e);
        }
    }

    public void updateDependencies(Connection conn, ParanormalEntity entity) throws SQLException {
        UUID id = entity.getId_threat();

        try (
                PreparedStatement deleteNames = conn.prepareStatement("DELETE FROM THREATS_NAMES WHERE id_threat = ?");
                PreparedStatement deleteElements = conn.prepareStatement("DELETE FROM THREAT_ELEMENTS WHERE id_threat = ?");
                PreparedStatement insertName = conn.prepareStatement("INSERT INTO THREATS_NAMES (id_threat, name) VALUES (?, ?)");
                PreparedStatement insertElement = conn.prepareStatement("INSERT INTO THREAT_ELEMENTS (id_element, id_threat) VALUES (?, ?)")
        ) {
            deleteNames.setString(1, id.toString());
            deleteNames.executeUpdate();

            deleteElements.setString(1, id.toString());
            deleteElements.executeUpdate();

            for (String name : entity.getNames()) {
                insertName.setString(1, id.toString());
                insertName.setString(2, name);
                insertName.executeUpdate();
            }

            for (UUID element : entity.getElements()) {
                insertElement.setString(1, element.toString());
                insertElement.setString(2, id.toString());
                insertElement.executeUpdate();
            }
        }
    }

    @Override
    protected ParanormalEntity mapResultSetToEntity(ResultSet rs) throws SQLException {
        // Mapeando o id_entity e enigma
        UUID idEntity = UUID.fromString(rs.getString("id_entity"));
        String enigma = rs.getString("enigma");

        // Inicializando as listas de valores que podem ter múltiplas instâncias
        List<String> threatNames = new ArrayList<>();
        List<String> elementNames = new ArrayList<>();
        List<String> elementDescriptions = new ArrayList<>();
        List<String> abilities = new ArrayList<>();
        List<UUID> elements = new ArrayList<>();

        // Preenchendo as listas com os valores da primeira linha do ResultSet
        threatNames.add(rs.getString("threat_name"));
        elementNames.add(rs.getString("element_name"));
        elementDescriptions.add(rs.getString("element_description"));
        abilities.add(rs.getString("ability"));
        elements.add(UUID.fromString(rs.getString("id_element")));

        // A criação da entidade será feita com as listas já preenchidas.
        ParanormalEntity entity = new ParanormalEntity();
        entity.setId_threat(idEntity);
        entity.setEnigma(enigma);
        entity.setDescription(rs.getString("threat_description"));
        entity.setNames(threatNames);
        entity.setElements(elements); // Associa os elementos
        entity.setAbilities(abilities); // Associa as habilidades

        // O código que manipula os ResultSets deve ser ajustado em algum lugar do fluxo, onde as
        // múltiplas linhas associadas à mesma entidade (com id_entity) são processadas e combinadas.

        return entity;
    }

    public ParanormalEntity getById(UUID id) throws SQLException {
        String query = """
        SELECT
          pe.id_entity,
          pe.enigma,
          t.description AS threat_description,
          GROUP_CONCAT(DISTINCT tn.name) AS threat_names,
          GROUP_CONCAT(DISTINCT e.id_element) AS element_ids,
          GROUP_CONCAT(DISTINCT e.name) AS element_names,
          GROUP_CONCAT(DISTINCT e.description) AS element_descriptions,
          GROUP_CONCAT(DISTINCT ea.ability) AS abilities
      FROM
          PARANORMAL_ENTITY pe
      JOIN
          THREATS t ON pe.id_entity = t.id_threat
      LEFT JOIN
          THREATS_NAMES tn ON tn.id_threat = t.id_threat
      LEFT JOIN
          THREAT_ELEMENTS te ON te.id_threat = t.id_threat
      LEFT JOIN
          ELEMENTS e ON e.id_element = te.id_element
      LEFT JOIN
          ENTITY_ABILITY ea ON ea.id_entity = pe.id_entity
      WHERE
          pe.id_entity = ?
      GROUP BY
          pe.id_entity, pe.enigma, t.description;
    """;

        try (Connection conn = ConnectionFactory.getConnection();
             PreparedStatement stmt = conn.prepareStatement(query)) {

            stmt.setString(1, id.toString());

            try (ResultSet rs = stmt.executeQuery()) {
                if (rs.next()) {
                    ParanormalEntity entity = new ParanormalEntity();
                    entity.setId_threat(UUID.fromString(rs.getString("id_entity")));
                    entity.setEnigma(rs.getString("enigma"));
                    entity.setDescription(rs.getString("threat_description"));
                    entity.setNames(new ArrayList<>());
                    entity.setAbilities(new ArrayList<>());
                    entity.setElements(new ArrayList<>());
                    entity.setElementsNames(new ArrayList<>());

                    // Threat names
                    if (rs.getString("threat_names") != null) {
                        String[] names = rs.getString("threat_names").split(",");
                        for (String name : names) {
                            entity.getNames().add(name.trim());
                        }
                    }

                    // Abilities
                    if (rs.getString("abilities") != null) {
                        String[] abilities = rs.getString("abilities").split(",");
                        for (String ability : abilities) {
                            entity.getAbilities().add(ability.trim());
                        }
                    }

                    // Element IDs
                    if (rs.getString("element_ids") != null) {
                        String[] uuidStrings = rs.getString("element_ids").split(",");
                        for (String uuidStr : uuidStrings) {
                            entity.getElements().add(UUID.fromString(uuidStr.trim()));
                        }
                    }

                    // Element names
                    if (rs.getString("element_names") != null) {
                        String[] elementNames = rs.getString("element_names").split(",");
                        for (String name : elementNames) {
                            entity.getElementsNames().add(name.trim());
                        }
                    }

                    return entity;
                }
            }
        }

        return null; // ou lançar uma exceção se preferir garantir a existência
    }


    public List<ParanormalEntity> getAll() throws SQLException {
        List<ParanormalEntity> result = new ArrayList<>();
        Map<UUID, ParanormalEntity> entityMap = new HashMap<>();

        String query = """
            SELECT
              pe.id_entity,
              pe.enigma,
              t.description AS threat_description,
              GROUP_CONCAT(DISTINCT tn.name) AS threat_names,
              GROUP_CONCAT(DISTINCT e.id_element) AS element_ids,
              GROUP_CONCAT(DISTINCT e.name) AS element_names,
              GROUP_CONCAT(DISTINCT e.description) AS element_descriptions,
              GROUP_CONCAT(DISTINCT ea.ability) AS abilities
          FROM
              PARANORMAL_ENTITY pe
          JOIN
              THREATS t ON pe.id_entity = t.id_threat
          LEFT JOIN
              THREATS_NAMES tn ON tn.id_threat = t.id_threat
          LEFT JOIN
              THREAT_ELEMENTS te ON te.id_threat = t.id_threat
          LEFT JOIN
              ELEMENTS e ON e.id_element = te.id_element
          LEFT JOIN
              ENTITY_ABILITY ea ON ea.id_entity = pe.id_entity
          GROUP BY
              pe.id_entity, pe.enigma, t.description
          ORDER BY
              pe.id_entity;
        """;

        try (   Connection conn = ConnectionFactory.getConnection();
                Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery(query)) {

            while (rs.next()) {
                UUID idEntity = UUID.fromString(rs.getString("id_entity"));

                // Se a entidade já foi processada, obtenha a instância existente
                ParanormalEntity entity = entityMap.get(idEntity);

                if (entity == null) {
                    // Se ainda não existe, crie uma nova instância de ParanormalEntity
                    entity = new ParanormalEntity();
                    entity.setId_threat(idEntity);
                    entity.setEnigma(rs.getString("enigma"));
                    entity.setDescription(rs.getString("threat_description"));
                    entity.setNames(new ArrayList<>()); // Inicialize a lista de names
                    entity.setAbilities(new ArrayList<>()); // Inicialize a lista de abilities
                    entity.setElements(new ArrayList<>()); // Inicialize a lista de elements
                    entity.setElementsNames(new ArrayList<>()); // Inicialize a lista de elements
                    // Adicione a entidade ao map
                    entityMap.put(idEntity, entity);
                }

                // Adicione os novos dados na lista correspondente (não duplicando)
                if (rs.getString("threat_names") != null) {
                    if (!entity.getNames().contains(rs.getString("threat_names"))) {
                    entity.getNames().add(rs.getString("threat_names"));

                    }
                }

                if (rs.getString("abilities") != null) {
                    String[] abilities = rs.getString("abilities").split(",");
                    for (String ability : abilities) {
                        if (!entity.getAbilities().contains(ability.trim())) {
                            entity.getAbilities().add(ability.trim());
                        }
                    }
                }


                if (rs.getString("element_ids") != null) {
                    String[] uuidStrings = rs.getString("element_ids").split(",");
                    for (String uuidStr : uuidStrings) {
                        UUID elementId = UUID.fromString(uuidStr.trim());
                        if (!entity.getElements().contains(elementId)) {
                            entity.getElements().add(elementId);
                        }
                    }
                }

                if (rs.getString("element_names") != null) {
                    String[] names = rs.getString("element_names").split(",");
                    for (String name : names) {
                        if (!entity.getElementsNames().contains(name.trim())) {
                            entity.getElementsNames().add(name.trim());
                        }
                    }
                }



            }
        }

        // Adicione as entidades no resultado final
        result.addAll(entityMap.values());
        return result;
    }

    public void delete(UUID id) throws SQLException {
        System.out.println("no DAO");
        String deleteAbilities = "DELETE FROM ENTITY_ABILITY WHERE id_entity = ?";
        String deleteThreatElements = "DELETE FROM THREAT_ELEMENTS WHERE id_threat = ?";
        String deleteThreatNames = "DELETE FROM THREATS_NAMES WHERE id_threat = ?";
        String deleteThreat = "DELETE FROM THREATS WHERE id_threat = ?";
        String deleteEntity = "DELETE FROM PARANORMAL_ENTITY WHERE id_entity = ?";

        try (Connection conn = ConnectionFactory.getConnection()) {
            conn.setAutoCommit(false); // para garantir atomicidade

            try (PreparedStatement stmt1 = conn.prepareStatement(deleteAbilities);
                 PreparedStatement stmt2 = conn.prepareStatement(deleteThreatElements);
                 PreparedStatement stmt3 = conn.prepareStatement(deleteThreatNames);
                 PreparedStatement stmt4 = conn.prepareStatement(deleteThreat);
                 PreparedStatement stmt5 = conn.prepareStatement(deleteEntity)) {

                for (PreparedStatement stmt : List.of(stmt1, stmt2, stmt3, stmt4, stmt5)) {
                    stmt.setString(1, id.toString());
                    stmt.executeUpdate();
                }

                conn.commit();
            } catch (SQLException ex) {
                System.out.println(ex);
                conn.rollback();
                throw ex;
            }
        }
    }

    public void updatee(ParanormalEntity entity) throws SQLException {
        String updateThreat = "UPDATE THREATS SET description = ? WHERE id_threat = ?";
        String updateEntity = "UPDATE PARANORMAL_ENTITY SET enigma = ? WHERE id_entity = ?";

        String deleteThreatNames = "DELETE FROM THREATS_NAMES WHERE id_threat = ?";
        String insertThreatName = "INSERT INTO THREATS_NAMES (id_threat, name) VALUES (?, ?)";

        String deleteAbilities = "DELETE FROM ENTITY_ABILITY WHERE id_entity = ?";
        String insertAbility = "INSERT INTO ENTITY_ABILITY (id_entity, ability) VALUES (?, ?)";

        String deleteElements = "DELETE FROM THREAT_ELEMENTS WHERE id_threat = ?";
        String insertElement = "INSERT INTO THREAT_ELEMENTS (id_threat, id_element) VALUES (?, ?)";

        try (Connection conn = ConnectionFactory.getConnection()) {
            conn.setAutoCommit(false);

            try (
                    PreparedStatement stmtThreat = conn.prepareStatement(updateThreat);
                    PreparedStatement stmtEntity = conn.prepareStatement(updateEntity);
                    PreparedStatement stmtDelNames = conn.prepareStatement(deleteThreatNames);
                    PreparedStatement stmtInsName = conn.prepareStatement(insertThreatName);
                    PreparedStatement stmtDelAbilities = conn.prepareStatement(deleteAbilities);
                    PreparedStatement stmtInsAbility = conn.prepareStatement(insertAbility);
                    PreparedStatement stmtDelElements = conn.prepareStatement(deleteElements);
                    PreparedStatement stmtInsElement = conn.prepareStatement(insertElement)
            ) {
                UUID id = entity.getId_threat();

                // Atualiza atributos principais
                stmtThreat.setString(1, entity.getDescription());
                stmtThreat.setString(2, id.toString());
                stmtThreat.executeUpdate();

                stmtEntity.setString(1, entity.getEnigma());
                stmtEntity.setString(2, id.toString());
                stmtEntity.executeUpdate();

                // Atualiza nomes
                stmtDelNames.setString(1, id.toString());
                stmtDelNames.executeUpdate();
                for (String name : entity.getNames()) {
                    stmtInsName.setString(1, id.toString());
                    stmtInsName.setString(2, name);
                    stmtInsName.executeUpdate();
                }

                // Atualiza habilidades
                stmtDelAbilities.setString(1, id.toString());
                stmtDelAbilities.executeUpdate();
                for (String ability : entity.getAbilities()) {
                    stmtInsAbility.setString(1, id.toString());
                    stmtInsAbility.setString(2, ability);
                    stmtInsAbility.executeUpdate();
                }

                // Atualiza elementos
                stmtDelElements.setString(1, id.toString());
                stmtDelElements.executeUpdate();
                for (UUID elementId : entity.getElements()) {
                    stmtInsElement.setString(1, id.toString());
                    stmtInsElement.setString(2, elementId.toString());
                    stmtInsElement.executeUpdate();
                }

                conn.commit();
            } catch (SQLException ex) {
                conn.rollback();
                throw ex;
            }
        }
    }

}

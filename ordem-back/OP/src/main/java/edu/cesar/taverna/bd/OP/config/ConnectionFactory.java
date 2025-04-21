package edu.cesar.taverna.bd.OP.config;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import io.github.cdimascio.dotenv.Dotenv;

public class ConnectionFactory {
    private static final Dotenv dotenv =
            Dotenv.configure().directory("./").load();

    public static Connection getConnection() throws SQLException{


        return DriverManager.getConnection(
                dotenv.get("DB_URL"),
                dotenv.get("DB_USER"),
                dotenv.get("DB_PASSWORD"));
    }
}

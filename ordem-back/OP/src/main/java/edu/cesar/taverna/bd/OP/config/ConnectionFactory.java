package edu.cesar.taverna.bd.OP.config;

import java.io.File;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import io.github.cdimascio.dotenv.Dotenv;

public class ConnectionFactory {
    private static final Dotenv dotenv;

    static {
        File envFile = new File(".env");

        if (envFile.exists()) {
            dotenv = Dotenv.configure().directory("./").load();
        } else {
            dotenv = Dotenv.configure().directory("./ordem-back/OP").load();
        }
    }

    public static Connection getConnection() throws SQLException{
        return DriverManager.getConnection(
                dotenv.get("DB_URL"),
                dotenv.get("DB_USER"),
                dotenv.get("DB_PASSWORD"));
    }
}

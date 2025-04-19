package edu.cesar.taverna.bd.OP;

import io.github.cdimascio.dotenv.Dotenv;
import io.github.cdimascio.dotenv.DotenvException;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class OpApplication {

	public static void main(String[] args) {
		Dotenv dotenv;

		try {
			dotenv = Dotenv.configure()
					.directory("./ordem-back/OP")
					.load();

		} catch (DotenvException e) {
			dotenv = Dotenv.configure()
					.directory("./")
					.load();
		}


		// Define as propriedades para o Spring Boot
		System.setProperty("spring.datasource.url", dotenv.get("DB_URL"));
		System.setProperty("spring.datasource.username", dotenv.get("DB_USER"));
		System.setProperty("spring.datasource.password", dotenv.get("DB_PASSWORD"));
		System.setProperty("spring.datasource.driver-class-name", "com.mysql.cj.jdbc.Driver");

		SpringApplication.run(OpApplication.class, args);
	}

}

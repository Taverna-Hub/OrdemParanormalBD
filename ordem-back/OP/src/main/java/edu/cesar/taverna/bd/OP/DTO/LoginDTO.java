package edu.cesar.taverna.bd.OP.DTO;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

public class LoginDTO {
    private final String login;
    private final String password;

    @JsonCreator
    public LoginDTO(
            @JsonProperty("login") String login,
            @JsonProperty("password_ver") String password
    ){
        this.login = login;
        this.password = password;
    }

    public String getLogin() {
        return login;
    }

    public String getPassword() {
        return password;
    }
}

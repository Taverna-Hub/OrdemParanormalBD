package edu.cesar.taverna.bd.OP.DTO;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;

@Getter
public class LoginDTO {
    private final String login;
    private final String password;

    @JsonCreator
    public LoginDTO(
            @JsonProperty("login") String login,
            @JsonProperty("password") String password
    ){
        this.login = login;
        this.password = password;
    }

}

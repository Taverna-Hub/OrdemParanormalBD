package edu.cesar.taverna.bd.OP.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import java.util.Arrays;
import java.util.List;
import java.util.UUID;

@EqualsAndHashCode(callSuper = true)
@Data
@NoArgsConstructor
public class Verissimo extends Agent{
    private UUID id;
    private String login;
    private String password;

    public static Verissimo promoteToVerissimo(Agent agent){
        return new Verissimo(agent);
    }

    private Verissimo(Agent agent){
        super(agent);
        setLogin();
        this.password = password;
    }

    public Verissimo(UUID id, String login, String password){
        super();
        this.id = id;
        this.login = login;
        this.password = password;
    }

    public void setLogin(){
        List<String> base = Arrays.asList(this.getName().split(" "));
        StringBuilder preLogin = new StringBuilder();
        base.forEach(word -> {
            if (!word.isEmpty()){
                preLogin.append(word.charAt(0));
            }
        });

        this.login = preLogin.toString();
    }


}

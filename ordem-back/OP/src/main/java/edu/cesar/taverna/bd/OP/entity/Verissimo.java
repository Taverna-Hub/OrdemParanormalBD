package edu.cesar.taverna.bd.OP.entity;

import lombok.Data;
import lombok.EqualsAndHashCode;

import java.util.Arrays;
import java.util.List;

@EqualsAndHashCode(callSuper = true)
@Data

public class Verissimo extends Agent{
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

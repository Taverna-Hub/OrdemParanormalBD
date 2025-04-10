package edu.cesar.taverna.bd.OP.entity;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.Data;

import java.time.LocalDate;
import java.util.Arrays;
import java.util.List;
import java.util.UUID;

@Data

public class Verissimo extends Agent{
    private String login;
    private String password;
    public Verissimo(String name, LocalDate birthDate, String telNumber, String andress,
                     String prestige, int nex, boolean retired, boolean trancended, String password){
        super( name,  birthDate,  telNumber,  andress,
                 prestige,  nex,  retired, trancended);
        setId();
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

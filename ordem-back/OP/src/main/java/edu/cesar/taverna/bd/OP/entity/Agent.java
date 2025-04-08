package edu.cesar.taverna.bd.OP.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.Arrays;
import java.util.List;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Agent {

    private UUID id;


    private String name;
//    private String login;
    private LocalDate birthDate;
    private String telNumber;
    private String andress;
    private String prestige;
    private int nex;
    private boolean retired;
    private boolean trancended;
//    private String password;

    public Agent(String name, LocalDate birthDate, String telNumber, String andress,
                   String prestige, int nex, boolean retired, boolean trancended) {
        this.name = name;
        this.birthDate = birthDate;
        this.telNumber = telNumber;
        this.andress = andress;
        this.prestige = prestige;
        this.nex = nex;
        this.retired = retired;
        this.trancended = trancended;
//        this.password = password;
//        setLogin();
        setId();
    }

    public void setId() {
        this.id = UUID.randomUUID();
    }
//
//    public void setLogin(){
//        List<String> base = Arrays.asList(this.name.split(" "));
//        StringBuilder preLogin = new StringBuilder();
//        base.forEach(word -> {
//            if (!word.isEmpty()){
//                preLogin.append(word.charAt(0));
//            }
//        });
//
//        this.login = preLogin.toString();
//    }
//



}

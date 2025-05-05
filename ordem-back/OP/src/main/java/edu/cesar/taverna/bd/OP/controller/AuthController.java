package edu.cesar.taverna.bd.OP.controller;

import edu.cesar.taverna.bd.OP.DTO.LoginDTO;
import edu.cesar.taverna.bd.OP.services.auth.AuthService;
import jakarta.servlet.http.HttpSession;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.UUID;

@RestController
@RequestMapping("/auth")
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(
            @RequestBody LoginDTO req,
            HttpSession session) {
        UUID hq_id = authService.authenticate(req.getLogin(), req.getPassword(), session);
        if (hq_id != null) {
            //session.setAttribute("login", req.getLogin());
            return ResponseEntity.ok("Login realizado com sucesso! Você está no QG: " + hq_id);
        } else {
            return ResponseEntity
                    .status(HttpStatus.UNAUTHORIZED)
                    .body("Credenciais inválidas.");
        }
    }

    @PostMapping("/logout")
    public ResponseEntity<String> logout(HttpSession session) {
        session.invalidate();
        return ResponseEntity.ok("Logout efetuado.");
    }
}

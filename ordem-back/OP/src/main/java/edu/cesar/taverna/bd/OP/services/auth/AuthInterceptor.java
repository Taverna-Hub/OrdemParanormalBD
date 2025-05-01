package edu.cesar.taverna.bd.OP.services.auth;

import edu.cesar.taverna.bd.OP.dao.VerissimoDAO;
import edu.cesar.taverna.bd.OP.entity.Verissimo;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

@Component
public class AuthInterceptor implements HandlerInterceptor {

    @Override
    public boolean preHandle(HttpServletRequest req,
                             HttpServletResponse res,
                             Object handler) throws Exception {
        HttpSession session = req.getSession(false);
        if (session == null) {
            res.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            res.getWriter().write("Você precisa estar logado para poder acessar.");
            return false;
        }

        String login = (String) session.getAttribute("login");
        if (login == null) {
            res.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            res.getWriter().write("Sessão inválida.");
            return false;
        }

        try {
            Verissimo verissimo = new VerissimoDAO().findByLogin(login);
            if (verissimo == null) {
                res.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
                res.getWriter().write("Usuário não encontrado.");
                return false;
            }
        } catch (Exception ex) {
            res.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
            res.getWriter().write("Erro interno ao verificar usuário");
            return false;
        }

        return true;
    }
}

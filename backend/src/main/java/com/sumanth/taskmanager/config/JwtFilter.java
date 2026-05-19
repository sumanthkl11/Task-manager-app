package com.sumanth.taskmanager.config;

import com.sumanth.taskmanager.util.JwtUtil;

import jakarta.servlet.*;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;

public class JwtFilter implements Filter {

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
            throws IOException, ServletException {

        HttpServletRequest req = (HttpServletRequest) request;
        String authHeader = req.getHeader("Authorization");

        if (authHeader != null && authHeader.startsWith("Bearer ")) {
            String token = authHeader.substring(7);

            if (JwtUtil.validateToken(token)) {
                chain.doFilter(request, response);
                return;
            }
        }

        HttpServletResponse res = (HttpServletResponse) response;
        res.setStatus(HttpServletResponse.SC_UNAUTHORIZED);

    }
}
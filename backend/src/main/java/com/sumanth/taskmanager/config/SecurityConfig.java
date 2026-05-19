package com.sumanth.taskmanager.config;

import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SecurityConfig {

    @Bean
    public FilterRegistrationBean<JwtFilter> jwtFilter() {

        FilterRegistrationBean<JwtFilter> registration = new FilterRegistrationBean<>();

        registration.setFilter(new JwtFilter());

        registration.addUrlPatterns("/tasks/*");

        return registration;
    }
}
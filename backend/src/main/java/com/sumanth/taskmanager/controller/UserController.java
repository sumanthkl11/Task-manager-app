package com.sumanth.taskmanager.controller;

import com.sumanth.taskmanager.dto.LoginRequest;
import com.sumanth.taskmanager.dto.RegisterRequest;
import com.sumanth.taskmanager.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public String register(@RequestBody RegisterRequest request) {

        return userService.register(request);
    }

    @PostMapping("/login")
    public String login(@RequestBody LoginRequest request) {

        return userService.login(request);
    }
}
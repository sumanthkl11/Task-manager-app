package com.sumanth.taskmanager.service;

import com.sumanth.taskmanager.dto.LoginRequest;
import com.sumanth.taskmanager.dto.RegisterRequest;
import com.sumanth.taskmanager.entity.User;
import com.sumanth.taskmanager.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.sumanth.taskmanager.exception.UserAlreadyExistsException;
import com.sumanth.taskmanager.util.JwtUtil;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public String register(RegisterRequest request) {
        Optional<User> existingUser = userRepository.findByEmail(request.getEmail());
        if (existingUser.isPresent()) {
            throw new UserAlreadyExistsException("User Already Exists");
        }
        User user = new User();

        user.setName(request.getName());
        user.setEmail(request.getEmail());

        user.setPassword(request.getPassword());

        userRepository.save(user);

        return "User Registered Successfully";

    }

    public String login(LoginRequest request) {
        Optional<User> userOptional = userRepository.findByEmail(request.getEmail());

        if (userOptional.isEmpty()) {
            return "User not found";
        }

        User user = userOptional.get();

        if (!user.getPassword().equals(request.getPassword())) {
            return "Invalid Password";
        }

        return JwtUtil.generateToken(user.getEmail());
    }
}

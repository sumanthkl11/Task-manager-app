package com.sumanth.taskmanager.service;

import com.sumanth.taskmanager.dto.ApplicationRequest;
import com.sumanth.taskmanager.enums.ApplicationStatus;
import com.sumanth.taskmanager.repository.UserRepository;
import com.sumanth.taskmanager.repository.JobApplicationRepository;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import com.sumanth.taskmanager.entity.JobApplication;

import com.sumanth.taskmanager.entity.User;

@Service
public class JobApplicationService {

    @Autowired
    private JobApplicationRepository repository;

    @Autowired
    private UserRepository userRepository;

    public String addApplication(ApplicationRequest request) {
        User user = userRepository.findById(request.getUserId()).get();

        JobApplication app = new JobApplication();

        app.setCompany(request.getCompany());
        app.setRole(request.getRole());

        app.setStatus(ApplicationStatus.valueOf(request.getStatus()));

        app.setUser(user);

        repository.save(app);

        return "Application Added";
    }

    public String updateStatus(Long id, String status) {

        JobApplication app = repository.findById(id).get();

        app.setStatus(
                ApplicationStatus.valueOf(status));

        repository.save(app);

        return "Status Updated";
    }
}
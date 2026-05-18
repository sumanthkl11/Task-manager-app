package com.sumanth.taskmanager.controller;

import com.sumanth.taskmanager.dto.ApplicationRequest;
import com.sumanth.taskmanager.service.JobApplicationService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/applications")
public class JobApplicationController {

    @Autowired
    private JobApplicationService service;

    @PostMapping
    public String addApplication(@Valid @RequestBody ApplicationRequest request) {

        return service.addApplication(request);
    }

    @PutMapping("/{id}/{status}")
    public String updateStatus(
            @PathVariable Long id,
            @PathVariable String status) {

        return service.updateStatus(id, status);
    }
}
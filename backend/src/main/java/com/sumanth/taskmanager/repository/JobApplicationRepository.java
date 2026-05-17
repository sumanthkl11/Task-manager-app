package com.sumanth.taskmanager.repository;

import com.sumanth.taskmanager.entity.JobApplication;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JobApplicationRepository
                extends JpaRepository<JobApplication, Long> {
}
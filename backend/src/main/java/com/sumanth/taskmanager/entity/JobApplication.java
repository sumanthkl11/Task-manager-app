package com.sumanth.taskmanager.entity;

import com.sumanth.taskmanager.enums.ApplicationStatus;
import jakarta.persistence.*;

@Entity
public class JobApplication {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String company;

    private String role;

    @Enumerated(EnumType.STRING)
    private ApplicationStatus status;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public ApplicationStatus getStatus() {
        return status;
    }

    public void setStatus(ApplicationStatus status) {
        this.status = status;
    }

    public User getUser() {
        return user;

    }
    public void setUser(User user){
        this.user = user;
    }

}
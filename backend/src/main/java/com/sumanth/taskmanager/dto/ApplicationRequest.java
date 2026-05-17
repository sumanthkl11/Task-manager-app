package com.sumanth.taskmanager.dto;

public class ApplicationRequest {

    private String company;
    private String role;
    private String status;
    private Long userId;

    public String getCompany() {
        return company;
    }

    public String getRole() {
        return role;
    }

    public String getStatus() {
        return status;
    }

    public Long getUserId() {
        return userId;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

}
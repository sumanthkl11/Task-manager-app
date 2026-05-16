package com.sumanth.taskmanager.service;

import com.sumanth.taskmanager.dto.TaskRequest;
import com.sumanth.taskmanager.entity.Task;
import com.sumanth.taskmanager.repository.TaskRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TaskService {

    @Autowired
    public TaskRepository taskRepository;

    public String createTask(TaskRequest request) {
        Task task = new Task();

        task.setTitle(request.getTitle());
        task.setDescription(request.getDescription());
        task.setCompleted(request.isCompleted());

        taskRepository.save(task);
        return "Task Created Successfully";
    }

    public List<Task> getAllTasks() {
        return taskRepository.findAll();
    }

    public String updateTask(Long id, TaskRequest request) {
        Optional<Task> optionalTask = taskRepository.findById(id);

        if (optionalTask.isEmpty()) {
            return "Task Not Found";
        }

        Task task = optionalTask.get();

        task.setTitle(request.getTitle());
        task.setDescription(request.getDescription());
        task.setCompleted(request.isCompleted());

        taskRepository.save(task);

        return "Task Updated Successfully";
    }

    public String deleteTask(Long id) {

        Optional<Task> optionalTask = taskRepository.findById(id);

        if (optionalTask.isEmpty()) {
            return "Task Not Found";
        }

        taskRepository.deleteById(id);

        return "Task Deleted Successfully";
    }
}
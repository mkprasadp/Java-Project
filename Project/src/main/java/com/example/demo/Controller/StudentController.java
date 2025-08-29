package com.example.demo.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.Student;
import com.example.demo.service.StudentService;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "http://localhost:5173")
public class StudentController {
    
    @Autowired
    private StudentService studentservice;
    
    // Signup
    @PostMapping("/signup")
    public Student signup(@RequestBody Student student) {
        return studentservice.register(student);
    }

    // Login
    @PostMapping("/login")
    public String login(@RequestBody Student student) {
        return studentservice.login(student.getEmail(), student.getPassword());
    }
}

package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.Student;
import com.example.demo.Repo.StudentRepo;

import java.util.Optional;

@Service
public class StudentService {
    
    @Autowired
    private StudentRepo studentRepo;
    
    // Signup
    public Student register(Student student) {
        return studentRepo.save(student);
    }

    // Login
    public String login(String email, String password) {
        Optional<Student> studentOpt = studentRepo.findByEmail(email);
        
        if (studentOpt.isPresent()) {
            Student student = studentOpt.get();
            if (student.getPassword().equals(password)) {
                return "Login Successful!";
            } else {
                return "Invalid Password!";
            }
        } else {
            return "User not found!";
        }
    }
}

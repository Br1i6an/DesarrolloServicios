package com.usta.crudspring.services;

import com.usta.crudspring.models.Faculties;
import com.usta.crudspring.models.Teachers;
import com.usta.crudspring.repo.TeacherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TeacherService {
    @Autowired
    private TeacherRepository teacherRepository;

    public List<Teachers> getAllTeachers(){
        return teacherRepository.findAll();
    }

    public Optional<Teachers> findById(Long id) {
        return teacherRepository.findById(id);
    }

    public Teachers create(Teachers teachers){
        return teacherRepository.save(teachers);
    }
}

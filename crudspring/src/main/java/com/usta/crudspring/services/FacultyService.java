package com.usta.crudspring.services;

import com.usta.crudspring.models.Faculties;
import com.usta.crudspring.repo.FacultyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FacultyService {
    @Autowired
    private FacultyRepository facultyRepository;

    public List<Faculties> getAllFaculties(){
        return facultyRepository.findAll();
    }

    public Optional<Faculties> findById(Long id) {
        return facultyRepository.findById(id);
    }

    public Faculties create(Faculties faculties){
        return facultyRepository.save(faculties);
    }
}

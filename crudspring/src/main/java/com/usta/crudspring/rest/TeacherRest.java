package com.usta.crudspring.rest;

import com.usta.crudspring.models.Teachers;
import com.usta.crudspring.services.TeacherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/teachers")
public class TeacherRest {
    @Autowired
    private TeacherService teacherService;

    @GetMapping("/listTeachers")
    private ResponseEntity<List<Teachers>> listAllTeachers(){
        return ResponseEntity.ok(teacherService.getAllTeachers());
    }

    @GetMapping("/list/{id}")
    private ResponseEntity<Optional<Teachers>> getOne(@PathVariable("id")Long id){
        return ResponseEntity.ok(teacherService.findById(id));
    }
    @PostMapping("/create")
    private ResponseEntity<Teachers> saveTeachers(@RequestBody Teachers teachers){
        Teachers temp = teacherService.create(teachers);
        try {
            return ResponseEntity.created(new URI("/api/teachers"+temp.getTeacherId())).body(teachers);
        }
        catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }
}

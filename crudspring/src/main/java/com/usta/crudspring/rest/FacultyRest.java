package com.usta.crudspring.rest;

import com.usta.crudspring.models.Faculties;
import com.usta.crudspring.services.FacultyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/faculties")
public class FacultyRest {
    @Autowired
    private FacultyService facultyService;

    @GetMapping("/listFaculties")
    private ResponseEntity<List<Faculties>> listAllFaculties(){
        return ResponseEntity.ok(facultyService.getAllFaculties());
    }

    @GetMapping("/list/{id}")
    private ResponseEntity<Optional<Faculties>> getOne(@PathVariable("id")Long id){
        return ResponseEntity.ok(facultyService.findById(id));
    }
    @PostMapping("/create")
    private ResponseEntity<Faculties> saveFaculties(@RequestBody Faculties faculties){
        Faculties temp = facultyService.create(faculties);
        try {
            return ResponseEntity.created(new URI("/api/faculties" +temp.getFacultyId())).body(faculties);
        }
        catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }
}

package com.usta.springproject.rest;

import com.usta.springproject.models.AuthorModel;
import com.usta.springproject.services.AuthorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/author")
public class AuthorRest {
    
    @Autowired
    private AuthorService authorService;

    @GetMapping("/list")
    private ResponseEntity<List<AuthorModel>> list() {
        return ResponseEntity.ok(authorService.list());
    }

    @PostMapping("/create")
    private ResponseEntity<AuthorModel> create(@RequestBody AuthorModel authorModel) {
        AuthorModel temp = authorService.create(authorModel);
        try {
            return ResponseEntity.created(new URI("/api/author" + temp.getAuthorId())).body(authorModel);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    @GetMapping(value = "/list/{id}")
    private ResponseEntity<Optional<AuthorModel>> getOneById(@PathVariable("id") Long id) {
        return ResponseEntity.ok(authorService.find(id));
    }

    @DeleteMapping("/delete/{id}")
    private ResponseEntity<String> delete(@PathVariable("id") Long id) {
        try {
            authorService.delete(id);
            return ResponseEntity.ok("Successfully deleted!");
        } catch (Exception e) {
            return ResponseEntity.ok("Unsuccessfully deleted!");
        }

    }

    @PutMapping("/edit")
    private ResponseEntity<AuthorModel> edit(@RequestBody AuthorModel authorModel) {
        AuthorModel temp = authorService.create(authorModel);
        try {
            return ResponseEntity.created(new URI("/api/author" + temp.getAuthorId())).body(authorModel);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    @GetMapping(value = "/count")
    private ResponseEntity<String> count() {
        return ResponseEntity.ok("Amount:  " + String.valueOf(authorService.count()) + " Authors." );
    }
}

package com.usta.springproject.rest;

import com.usta.springproject.models.AuthorBookModel;
import com.usta.springproject.services.AuthorBookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/authorbook")
public class AuthorBookRest {
    
    @Autowired
    private AuthorBookService authorBookService;

    @GetMapping("/list")
    private ResponseEntity<List<AuthorBookModel>> list() {
        return ResponseEntity.ok(authorBookService.list());
    }

    @PostMapping("/create")
    private ResponseEntity<AuthorBookModel> create(@RequestBody AuthorBookModel authorBookModel) {
        AuthorBookModel temp = authorBookService.create(authorBookModel);
        try {
            return ResponseEntity.created(new URI("/api/authorbook" + temp.getAuthorBookId())).body(authorBookModel);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    @GetMapping(value = "/list/{id}")
    private ResponseEntity<Optional<AuthorBookModel>> getOneById(@PathVariable("id") Long id) {
        return ResponseEntity.ok(authorBookService.find(id));
    }

    @DeleteMapping("/delete/{id}")
    private ResponseEntity<String> delete(@PathVariable("id") Long id) {
        try {
            authorBookService.delete(id);
            return ResponseEntity.ok("Successfully deleted!");
        } catch (Exception e) {
            return ResponseEntity.ok("Unsuccessfully deleted!");
        }

    }

    @PutMapping("/edit")
    private ResponseEntity<AuthorBookModel> edit(@RequestBody AuthorBookModel authorBookModel) {
        AuthorBookModel temp = authorBookService.create(authorBookModel);
        try {
            return ResponseEntity.created(new URI("/api/authorbook" + temp.getAuthorBookId())).body(authorBookModel);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    @GetMapping(value = "/count")
    private ResponseEntity<String> count() {
        return ResponseEntity.ok("Amount:  " + String.valueOf(authorBookService.count()) + " author per book.");
    }
}

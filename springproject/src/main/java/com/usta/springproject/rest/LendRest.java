package com.usta.springproject.rest;

import com.usta.springproject.models.LendModel;
import com.usta.springproject.services.LendService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/lend")
public class LendRest {
    
    @Autowired
    private LendService lendService;

    @GetMapping("/list")
    private ResponseEntity<List<LendModel>> list() {
        return ResponseEntity.ok(lendService.list());
    }

    @PostMapping("/create")
    private ResponseEntity<LendModel> create(@RequestBody LendModel lendModel) {
        LendModel temp = lendService.create(lendModel);
        try {
            return ResponseEntity.created(new URI("/api/lend" + temp.getLendId())).body(lendModel);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    @GetMapping(value = "/list/{id}")
    private ResponseEntity<Optional<LendModel>> getOneById(@PathVariable("id") Long id) {
        return ResponseEntity.ok(lendService.find(id));
    }

    @DeleteMapping("/delete/{id}")
    private ResponseEntity<String> delete(@PathVariable("id") Long id) {
        try {
            lendService.delete(id);
            return ResponseEntity.ok("Successfully deleted!");
        } catch (Exception e) {
            return ResponseEntity.ok("Unsuccessfully deleted!");
        }

    }

    @PutMapping("/edit")
    private ResponseEntity<LendModel> edit(@RequestBody LendModel lendModel) {
        LendModel temp = lendService.create(lendModel);
        try {
            return ResponseEntity.created(new URI("/api/lend" + temp.getLendId())).body(lendModel);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    @GetMapping(value = "/count")
    private ResponseEntity<String> count() {
        return ResponseEntity.ok("Amount:  " + String.valueOf(lendService.count()) + " lends.");
    }
}

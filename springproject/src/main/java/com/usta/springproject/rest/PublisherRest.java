package com.usta.springproject.rest;

import com.usta.springproject.models.PublisherModel;
import com.usta.springproject.services.PublisherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/publisher")
public class PublisherRest {
    
    @Autowired
    private PublisherService publisherService;

    @GetMapping("/list")
    private ResponseEntity<List<PublisherModel>> list() {
        return ResponseEntity.ok(publisherService.list());
    }

    @PostMapping("/create")
    private ResponseEntity<PublisherModel> create(@RequestBody PublisherModel publisherModel) {
        PublisherModel temp = publisherService.create(publisherModel);
        try {
            return ResponseEntity.created(new URI("/api/publisher" + temp.getPublisherId())).body(publisherModel);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    @GetMapping(value = "/list/{id}")
    private ResponseEntity<Optional<PublisherModel>> getOneById(@PathVariable("id") Long id) {
        return ResponseEntity.ok(publisherService.find(id));
    }

    @DeleteMapping("/delete/{id}")
    private ResponseEntity<String> delete(@PathVariable("id") Long id) {
        try {
            publisherService.delete(id);
            return ResponseEntity.ok("Successfully deleted!");
        } catch (Exception e) {
            return ResponseEntity.ok("Unsuccessfully deleted!");
        }

    }

    @PutMapping("/edit")
    private ResponseEntity<PublisherModel> edit(@RequestBody PublisherModel publisherModel) {
        PublisherModel temp = publisherService.create(publisherModel);
        try {
            return ResponseEntity.created(new URI("/api/publisher" + temp.getPublisherId())).body(publisherModel);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    @GetMapping(value = "/count")
    private ResponseEntity<String> count() {
        return ResponseEntity.ok("Amount:  " + String.valueOf(publisherService.count()) + " publishers.");
    }

    @GetMapping(value = "/publisherbybookid/{id}")
    private ResponseEntity<String> query(@PathVariable("id") Long id) {
        return ResponseEntity.ok("Publisher by book id: " + publisherService.publisherByBookId(id));
    }
}

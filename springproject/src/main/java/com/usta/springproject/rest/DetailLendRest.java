package com.usta.springproject.rest;

import com.usta.springproject.models.DetailLendModel;
import com.usta.springproject.services.DetailLendService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/detaillend")
public class DetailLendRest {
    
    @Autowired
    private DetailLendService detailLendService;

    @GetMapping("/list")
    private ResponseEntity<List<DetailLendModel>> list() {
        return ResponseEntity.ok(detailLendService.list());
    }

    @PostMapping("/create")
    private ResponseEntity<DetailLendModel> create(@RequestBody DetailLendModel detailLendModel) {
        DetailLendModel temp = detailLendService.create(detailLendModel);
        try {
            return ResponseEntity.created(new URI("/api/detaillend" + temp.getDetailLendId())).body(detailLendModel);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    @GetMapping(value = "/list/{id}")
    private ResponseEntity<Optional<DetailLendModel>> getOneById(@PathVariable("id") Long id) {
        return ResponseEntity.ok(detailLendService.find(id));
    }

    @DeleteMapping("/delete/{id}")
    private ResponseEntity<String> delete(@PathVariable("id") Long id) {
        try {
            detailLendService.delete(id);
            return ResponseEntity.ok("Successfully deleted!");
        } catch (Exception e) {
            return ResponseEntity.ok("Unsuccessfully deleted!");
        }

    }

    @PutMapping("/edit")
    private ResponseEntity<DetailLendModel> edit(@RequestBody DetailLendModel detailLendModel) {
        DetailLendModel temp = detailLendService.create(detailLendModel);
        try {
            return ResponseEntity.created(new URI("/api/detaillend" + temp.getDetailLendId())).body(detailLendModel);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    @GetMapping(value = "/count")
    private ResponseEntity<String> count() {
        return ResponseEntity.ok("Amount:  " + String.valueOf(detailLendService.count()) + " detail per lend");
    }
}

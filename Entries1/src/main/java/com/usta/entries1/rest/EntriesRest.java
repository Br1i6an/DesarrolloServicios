package com.usta.entries1.rest;

import com.usta.entries1.models.EntriesModel;
import com.usta.entries1.services.EntriesService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("api/entries")
public class EntriesRest {
    private EntriesService entriesService;

    @GetMapping("/list")
    private ResponseEntity<List<EntriesModel>> listEntries(){
        return ResponseEntity.ok(entriesService.listEntries());
    }

    @PostMapping("/create")
    private ResponseEntity<EntriesModel> createEntries(@RequestBody EntriesModel entries){
        EntriesModel temporal = entriesService.createEntry(entries);
        try{
            return ResponseEntity.created(new URI("/api/entries"+temporal.getEntryId())).body(entries);
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }

    }

    @PutMapping("/edit")
    private ResponseEntity<EntriesModel>  editEntries(@RequestBody EntriesModel entries){
        EntriesModel temporal = entriesService.editEntry(entries);
        try{
            return ResponseEntity.created(new URI("/api/entries"+temporal.getEntryId())).body(entries);
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }


    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteEntries(@PathVariable("id") Long id){
        entriesService.deleteEntry(id);
        return ResponseEntity.ok().build();
    }
}

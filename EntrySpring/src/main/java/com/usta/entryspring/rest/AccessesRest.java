package com.usta.entryspring.rest;

import com.usta.entryspring.models.AccessesModel;
import com.usta.entryspring.services.AccessesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.security.PrivilegedAction;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/accesses")
public class AccessesRest {
    private AccessesService accessesService;

    @GetMapping("/list")
    private ResponseEntity<List<AccessesModel>> listAccesses(){
        return ResponseEntity.ok(accessesService.listAccesses());
    }

    @PostMapping("/create")
    private ResponseEntity<AccessesModel> createAccesses(@RequestBody AccessesModel accesses){
        AccessesModel temporal = accessesService.createAccess(accesses);
        try{
            return ResponseEntity.created(new URI("/api/accesses"+temporal.getAccesId())).body(accesses);
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }

    }

    @PutMapping("/edit")
    private ResponseEntity<AccessesModel>  editAccess(@RequestBody AccessesModel accesses){
        AccessesModel temporal = accessesService.editAccess(accesses);
        try{
            return ResponseEntity.created(new URI("/api/accesses"+temporal.getAccesId())).body(accesses);
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }


    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteAccess(@PathVariable("id") Long id){
        accessesService.deleteAccess(id);
        return ResponseEntity.ok().build();
    }
}

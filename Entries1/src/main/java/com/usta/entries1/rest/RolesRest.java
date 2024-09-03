package com.usta.entries1.rest;

import com.usta.entries1.models.RolesModel;
import com.usta.entries1.services.RolesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("api/roles")
public class RolesRest {
    @Autowired
    private RolesService rolesService;

    @GetMapping("/listRoles")
    private ResponseEntity<List<RolesModel>> listRoles(){
        return ResponseEntity.ok(rolesService.getlistRoles());
    }

    @PostMapping("/create")
    private ResponseEntity<RolesModel> createRoles(@RequestBody RolesModel roles){
        RolesModel temporal = rolesService.createRole(roles);
        try{
            return ResponseEntity.created(new URI("/api/roles"+temporal.getRoleId())).body(roles);
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }

    }

    @PutMapping("/edit")
    private ResponseEntity<RolesModel>  editRoles(@RequestBody RolesModel roles){
        RolesModel temporal = rolesService.editRole(roles);
        try{
            return ResponseEntity.created(new URI("/api/roles"+temporal.getRoleId())).body(roles);
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }


    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteRoles(@PathVariable("id") Long id){
        rolesService.deleteRole(id);
        return ResponseEntity.ok().build();
    }
}

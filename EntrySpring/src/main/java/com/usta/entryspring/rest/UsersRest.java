package com.usta.entryspring.rest;

import com.usta.entryspring.models.UsersModel;
import com.usta.entryspring.services.UsersService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UsersRest {
    private UsersService usersService;

    @GetMapping("/list")
    private ResponseEntity<List<UsersModel>> listUsers() {
        return ResponseEntity.ok(usersService.listUsers());
    }

    @PostMapping("/create")
    private ResponseEntity<UsersModel> createUsers(@RequestBody UsersModel users) {
        UsersModel temporal = usersService.createUser(users);
        try {
            return ResponseEntity.created(new URI("/api/users" + temporal.getUserId())).body(users);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }

    }

    @PutMapping("/edit")
    private ResponseEntity<UsersModel> editUsers(@RequestBody UsersModel users) {
        UsersModel temporal = usersService.editUser(users);
        try {
            return ResponseEntity.created(new URI("/api/users" + temporal.getUserId())).body(users);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteUsers(@PathVariable("id") Long id){
        usersService.deleteUser(id);
        return ResponseEntity.ok().build();
    }
}

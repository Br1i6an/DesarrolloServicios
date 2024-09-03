package com.usta.springproject.rest;

import com.usta.springproject.models.CustomerModel;
import com.usta.springproject.services.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/customer")
public class CustomerRest {
    
    @Autowired
    private CustomerService customerService;

    @GetMapping("/list")
    private ResponseEntity<List<CustomerModel>> list() {
        return ResponseEntity.ok(customerService.list());
    }

    @PostMapping("/create")
    private ResponseEntity<CustomerModel> create(@RequestBody CustomerModel customerModel) {
        CustomerModel temp = customerService.create(customerModel);
        try {
            return ResponseEntity.created(new URI("/api/customer" + temp.getCustomerId())).body(customerModel);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    @GetMapping(value = "/list/{id}")
    private ResponseEntity<Optional<CustomerModel>> getOneById(@PathVariable("id") Long id) {
        return ResponseEntity.ok(customerService.find(id));
    }

    @DeleteMapping("/delete/{id}")
    private ResponseEntity<String> delete(@PathVariable("id") Long id) {
        try {
            customerService.delete(id);
            return ResponseEntity.ok("Successfully deleted!");
        } catch (Exception e) {
            return ResponseEntity.ok("Unsuccessfully deleted!");
        }

    }

    @PutMapping("/edit")
    private ResponseEntity<CustomerModel> edit(@RequestBody CustomerModel customerModel) {
        CustomerModel temp = customerService.create(customerModel);
        try {
            return ResponseEntity.created(new URI("/api/customer" + temp.getCustomerId())).body(customerModel);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    @GetMapping(value = "/count")
    private ResponseEntity<String> count() {
        return ResponseEntity.ok("Amount:  " + String.valueOf(customerService.count()) + " customers.");
    }

    @GetMapping(value = "/customerbylendid/{id}")
    private ResponseEntity<String> query(@PathVariable("id") Long id) {
        return ResponseEntity.ok("Customer by lend id: " + customerService.customerByLendId(id));
    }
}

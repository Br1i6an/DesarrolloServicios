package com.usta.sales.rest;


import com.usta.sales.models.CustomerModel;
import com.usta.sales.services.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("api/customers")
public class CustomerRest {
    @Autowired
    private CustomerService customerService;

    @GetMapping("/list")
    private ResponseEntity<List<CustomerModel>> listCustomer(){
        return ResponseEntity.ok(customerService.listCustomers());
    }

    @PostMapping("/create")
    private ResponseEntity<CustomerModel> createCustomers(@RequestBody CustomerModel customer){
        CustomerModel temporal = customerService.createCustomer(customer);
        try{
            return ResponseEntity.created(new URI("/api/customers"+temporal.getCustomerId())).body(customer);
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }

    }

    @PutMapping("/edit")
    private ResponseEntity<CustomerModel>  editCustomers(@RequestBody CustomerModel customer){
        CustomerModel temporal = customerService.editCustomer(customer);
        try{
            return ResponseEntity.created(new URI("/api/customers"+temporal.getCustomerId())).body(customer);
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteCustomers(@PathVariable("id") Long id){
        customerService.deleteCustomer(id);
        return ResponseEntity.ok().build();
    }
}

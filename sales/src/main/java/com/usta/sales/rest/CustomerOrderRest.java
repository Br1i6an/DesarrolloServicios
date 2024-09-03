package com.usta.sales.rest;


import com.usta.sales.models.CustomerOrderModel;
import com.usta.sales.services.CustomerOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("api/customerorders")
public class CustomerOrderRest {
    @Autowired

    private CustomerOrderService customerOrderService;

    @GetMapping("/list")
    private ResponseEntity<List<CustomerOrderModel>> listCustomerOrder(){
        return ResponseEntity.ok(customerOrderService.listCustomerOrders());
    }

    @PostMapping("/create")
    private ResponseEntity<CustomerOrderModel> createCustomerOrders(@RequestBody CustomerOrderModel customerorder){
        CustomerOrderModel temporal = customerOrderService.createCustomerOrder(customerorder);
        try{
            return ResponseEntity.created(new URI("/api/customerorders"+temporal.getCustomerorderId())).body(customerorder);
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }

    }

    @PutMapping("/edit")
    private ResponseEntity<CustomerOrderModel>  editCustomerOrders(@RequestBody CustomerOrderModel customerorder) {
        CustomerOrderModel temporal = customerOrderService.editCustomerOrder(customerorder);
        try {
            return ResponseEntity.created(new URI("/api/customerorders" + temporal.getCustomerorderId())).body(customerorder);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

        @DeleteMapping("/delete/{id}")
        public ResponseEntity<Void> deleteCustomerOrders(@PathVariable("id") Long id){
            customerOrderService.deleteCustomerOrder(id);
            return ResponseEntity.ok().build();
        }
    }

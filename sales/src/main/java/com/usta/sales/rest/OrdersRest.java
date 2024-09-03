package com.usta.sales.rest;


import com.usta.sales.models.OrdersModel;
import com.usta.sales.services.OrdersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("api/orders")
public class OrdersRest {
    @Autowired
    private OrdersService ordersService;

    @GetMapping("/list")
    private ResponseEntity<List<OrdersModel>> listOrder(){
        return ResponseEntity.ok(ordersService.listOrders());
    }

    @PostMapping("/create")
    private ResponseEntity<OrdersModel> createOrder(@RequestBody OrdersModel orders){
        OrdersModel temporal = ordersService.createOrder(orders);
        try{
            return ResponseEntity.created(new URI("/api/orders"+temporal.getOrderId())).body(orders);
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }

    }

    @PutMapping("/edit")
    private ResponseEntity<OrdersModel>  editOrder(@RequestBody OrdersModel orders){
        OrdersModel temporal = ordersService.editOrder(orders);
        try{
            return ResponseEntity.created(new URI("/api/orders"+temporal.getOrderId())).body(orders);
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteBills(@PathVariable("id") Long id){
        ordersService.deleteOrder(id);
        return ResponseEntity.ok().build();
    }
}

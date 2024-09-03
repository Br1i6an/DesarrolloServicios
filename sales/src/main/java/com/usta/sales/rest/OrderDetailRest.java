package com.usta.sales.rest;


import com.usta.sales.models.OrderDetailModel;
import com.usta.sales.services.OrderDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("api/orderdetails")
public class OrderDetailRest {
    @Autowired
    private OrderDetailService orderDetailService;

    @GetMapping("/list")
    private ResponseEntity<List<OrderDetailModel>> listOrderDetail(){
        return ResponseEntity.ok(orderDetailService.listOrderDetails());
    }

    @PostMapping("/create")
    private ResponseEntity<OrderDetailModel> createOrderDetails(@RequestBody OrderDetailModel orderdetail){
        OrderDetailModel temporal = orderDetailService.createOrderDetail(orderdetail);
        try{
            return ResponseEntity.created(new URI("/api/orderdetails"+temporal.getOrderdetailId())).body(orderdetail);
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }

    }

    @PutMapping("/edit")
    private ResponseEntity<OrderDetailModel>  editOrderDetails(@RequestBody OrderDetailModel orderdetail){
        OrderDetailModel temporal = orderDetailService.editOrderDetail(orderdetail);
        try{
            return ResponseEntity.created(new URI("/api/orderdetails"+temporal.getOrderdetailId())).body(orderdetail);
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteBills(@PathVariable("id") Long id){
        orderDetailService.deleteOrderDetail(id);
        return ResponseEntity.ok().build();
    }
}

package com.usta.sales.rest;


import com.usta.sales.models.BillModel;
import com.usta.sales.services.BillService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("api/bills")
public class BillRest {
    @Autowired
    private BillService billService;

    @GetMapping("/list")
    private ResponseEntity<List<BillModel>> listBill(){
        return ResponseEntity.ok(billService.listBills());
    }

    @PostMapping("/create")
    private ResponseEntity<BillModel> createBills(@RequestBody BillModel bill){
        BillModel temporal = billService.createBill(bill);
        try{
            return ResponseEntity.created(new URI("/api/bills"+temporal.getBillId())).body(bill);
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }

    }

    @PutMapping("/edit")
    private ResponseEntity<BillModel>  editBills(@RequestBody BillModel bill){
        BillModel temporal = billService.editBill(bill);
        try{
            return ResponseEntity.created(new URI("/api/bills"+temporal.getBillId())).body(bill);
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteBills(@PathVariable("id") Long id){
        billService.deleteBill(id);
        return ResponseEntity.ok().build();
    }
}

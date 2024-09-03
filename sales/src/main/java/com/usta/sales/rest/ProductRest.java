package com.usta.sales.rest;


import com.usta.sales.models.ProductModel;
import com.usta.sales.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("api/products")
public class ProductRest {
    @Autowired
    private ProductService productService;

    @GetMapping("/list")
    private ResponseEntity<List<ProductModel>> listProduct(){
        return ResponseEntity.ok(productService.listProducts());
    }

    @PostMapping("/create")
    private ResponseEntity<ProductModel> createBills(@RequestBody ProductModel product){
        ProductModel temporal = productService.createProduct(product);
        try{
            return ResponseEntity.created(new URI("/api/products"+temporal.getProductId())).body(product);
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }

    }

    @PutMapping("/edit")
    private ResponseEntity<ProductModel>  editBills(@RequestBody ProductModel product){
        ProductModel temporal = productService.editProduct(product);
        try{
            return ResponseEntity.created(new URI("/api/products"+temporal.getProductId())).body(product);
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteBills(@PathVariable("id") Long id){
        productService.deleteProduct(id);
        return ResponseEntity.ok().build();
    }
}

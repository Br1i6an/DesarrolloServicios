package com.usta.sales.services;

import com.usta.sales.models.ProductModel;
import com.usta.sales.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    @Autowired
    private  ProductRepository productRepository;

    public List<ProductModel> listProducts(){
        return productRepository.findAll();}
    public  ProductModel createProduct(ProductModel bill){
        return productRepository.save(bill);
    }
    public ProductModel editProduct(ProductModel bill){
        return productRepository.save(bill);
    }
    public Optional<ProductModel> findProduct(Long id){
        return productRepository.findById(id);
    }
    public void deleteProduct(Long id){
        productRepository.deleteById(id);
    }
}

package com.usta.springproject.services;

import com.usta.springproject.models.CustomerModel;
import com.usta.springproject.repositories.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CustomerService {
    
    @Autowired
    private CustomerRepository customerRepository;

    public List<CustomerModel> list(){
        return customerRepository.findAll();
    }

    public CustomerModel create(CustomerModel customer){
        return customerRepository.save(customer);
    }

    public Optional<CustomerModel> find(Long id){
        return customerRepository.findById(id);
    }

    public void delete(Long id){
        customerRepository.deleteById(id);
    }

    //Specific Methods.

    public Integer count(){
        return customerRepository.countCustomerModel();
    }

    public String customerByLendId(Long id) {
        return customerRepository.customerByLendId(id);
    }
}

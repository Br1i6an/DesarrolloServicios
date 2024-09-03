package com.usta.sales.services;

import com.usta.sales.models.CustomerModel;
import com.usta.sales.repositories.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CustomerService {
    
    @Autowired
    private CustomerRepository customerRepository;

    public List<CustomerModel> listCustomers(){return customerRepository.findAll();}
    public CustomerModel createCustomer(CustomerModel customer){return customerRepository.save(customer);}
    public CustomerModel editCustomer(CustomerModel customer){return customerRepository.save(customer);}
    public Optional<CustomerModel> findcustomer(Long id){return customerRepository.findById(id);}
    public void deleteCustomer(Long id){customerRepository.deleteById(id);}
}

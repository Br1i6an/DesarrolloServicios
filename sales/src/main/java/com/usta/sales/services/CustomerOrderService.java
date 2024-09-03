package com.usta.sales.services;

import com.usta.sales.models.CustomerOrderModel;
import com.usta.sales.repositories.CustomerOrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CustomerOrderService {

    @Autowired
    private CustomerOrderRepository customerOrderRepository;

    public List<CustomerOrderModel> listCustomerOrders(){
        return customerOrderRepository.findAll();
    }
    public CustomerOrderModel createCustomerOrder(CustomerOrderModel customerorder){return customerOrderRepository.save(customerorder);}
    public CustomerOrderModel editCustomerOrder(CustomerOrderModel customerorder){return customerOrderRepository.save(customerorder);}
    public Optional<CustomerOrderModel> findCustomerOrder(Long id){
        return customerOrderRepository.findById(id);
    }
    public void deleteCustomerOrder(Long id){
        customerOrderRepository.deleteById(id);
    }
}

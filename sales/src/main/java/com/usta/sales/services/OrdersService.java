package com.usta.sales.services;

import com.usta.sales.models.OrdersModel;
import com.usta.sales.repositories.OrdersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OrdersService {

    @Autowired
    private OrdersRepository ordersRepository;

    public List<OrdersModel> listOrders(){return ordersRepository.findAll();}
    public OrdersModel createOrder(OrdersModel orderDetail){return ordersRepository.save(orderDetail);}
    public OrdersModel editOrder(OrdersModel orderDetail){return ordersRepository.save(orderDetail);}
    public Optional<OrdersModel> findOrder(Long id){return ordersRepository.findById(id);}
    public void deleteOrder(Long id){ordersRepository.deleteById(id);}
}

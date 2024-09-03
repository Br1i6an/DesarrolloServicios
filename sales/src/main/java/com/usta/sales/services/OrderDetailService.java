package com.usta.sales.services;

import com.usta.sales.models.OrderDetailModel;
import com.usta.sales.repositories.OrderDetailRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OrderDetailService {

    @Autowired
    private OrderDetailRepository orderDetailRepository;

    public List<OrderDetailModel> listOrderDetails(){return orderDetailRepository.findAll();}
    public OrderDetailModel createOrderDetail(OrderDetailModel orderDetail){return orderDetailRepository.save(orderDetail);}
    public OrderDetailModel editOrderDetail(OrderDetailModel orderDetail){return orderDetailRepository.save(orderDetail);}
    public Optional<OrderDetailModel> findOrderDetail(Long id){return orderDetailRepository.findById(id);}
    public void deleteOrderDetail(Long id){orderDetailRepository.deleteById(id);}
}

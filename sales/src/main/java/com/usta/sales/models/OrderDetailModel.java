package com.usta.sales.models;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "orderdetail")
public class OrderDetailModel implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "orderdetail_id")
    private Long orderdetailId;

    @Column(name = "orderdetail_address")
    private String orderdetailAddress;

    @Column(name = "orderdetail_totalorder")
    private Integer orderdetailTotalOrder;

    @JoinColumn(name = "order_id", referencedColumnName = "order_id")
    @ManyToOne(fetch = FetchType.EAGER)
    private OrdersModel ordersModel;

    public OrderDetailModel() {
    }

    public OrderDetailModel(Long orderdetailId, String orderdetailAddress, Integer orderdetailTotalOrder, OrdersModel ordersModel) {
        this.orderdetailId = orderdetailId;
        this.orderdetailAddress = orderdetailAddress;
        this.orderdetailTotalOrder = orderdetailTotalOrder;
        this.ordersModel = ordersModel;
    }

    public Long getOrderdetailId() {
        return orderdetailId;
    }

    public void setOrderdetailId(Long orderdetailId) {
        this.orderdetailId = orderdetailId;
    }

    public String getOrderdetailAddress() {
        return orderdetailAddress;
    }

    public void setOrderdetailAddress(String orderdetailAddress) {
        this.orderdetailAddress = orderdetailAddress;
    }

    public Integer getOrderdetailTotalOrder() {
        return orderdetailTotalOrder;
    }

    public void setOrderdetailTotalOrder(Integer orderdetailTotalOrder) {
        this.orderdetailTotalOrder = orderdetailTotalOrder;
    }

    public OrdersModel getOrdersModel() {
        return ordersModel;
    }

    public void setOrdersModel(OrdersModel ordersModel) {
        this.ordersModel = ordersModel;
    }
}

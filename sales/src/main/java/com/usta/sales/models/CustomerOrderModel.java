package com.usta.sales.models;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "customerorder")
public class CustomerOrderModel implements Serializable{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "customerorder_id")
    private Long customerorderId;

    @Column(name = "customerorder_description")
    private String customerorderDescription;

    @JoinColumn(name = "order_id", referencedColumnName = "order_id")
    @ManyToOne(fetch = FetchType.EAGER)
    private OrdersModel ordersModel;

    @JoinColumn(name = "customer_id", referencedColumnName = "customer_id")
    @ManyToOne(fetch = FetchType.EAGER)
    private CustomerModel customerModel;

    public CustomerOrderModel() {
    }

    public CustomerOrderModel(Long customerorderId, String customerorderDescription, OrdersModel ordersModel, CustomerModel customerModel) {
        this.customerorderId = customerorderId;
        this.customerorderDescription = customerorderDescription;
        this.ordersModel = ordersModel;
        this.customerModel = customerModel;
    }

    public Long getCustomerorderId() {
        return customerorderId;
    }

    public void setCustomerorderId(Long customerorderId) {
        this.customerorderId = customerorderId;
    }

    public String getCustomerorderDescription() {
        return customerorderDescription;
    }

    public void setCustomerorderDescription(String customerorderDescription) {
        this.customerorderDescription = customerorderDescription;
    }

    public OrdersModel getOrdersModel() {
        return ordersModel;
    }

    public void setOrdersModel(OrdersModel ordersModel) {
        this.ordersModel = ordersModel;
    }

    public CustomerModel getCustomerModel() {
        return customerModel;
    }

    public void setCustomerModel(CustomerModel customerModel) {
        this.customerModel = customerModel;
    }
}

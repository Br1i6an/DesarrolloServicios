package com.usta.sales.models;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "orders")
public class OrdersModel implements Serializable{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "order_id")
    private Long orderId;

    @Column(name = "order_number")
    private String orderNumber;

    @Column(name = "order_description")
    private String orderDescription;

    @JoinColumn(name = "product_id", referencedColumnName = "product_id")
    @ManyToOne(fetch = FetchType.EAGER)
    private ProductModel productModel;

    public OrdersModel() {
    }

    public OrdersModel(Long orderId, String orderNumber, String orderDescription, ProductModel productModel) {
        this.orderId = orderId;
        this.orderNumber = orderNumber;
        this.orderDescription = orderDescription;
        this.productModel = productModel;
    }

    public Long getOrderId() {
        return orderId;
    }

    public void setOrderId(Long orderId) {
        this.orderId = orderId;
    }

    public String getOrderNumber() {
        return orderNumber;
    }

    public void setOrderNumber(String orderNumber) {
        this.orderNumber = orderNumber;
    }

    public String getOrderDescription() {
        return orderDescription;
    }

    public void setOrderDescription(String orderDescription) {
        this.orderDescription = orderDescription;
    }

    public ProductModel getProductModel() {
        return productModel;
    }

    public void setProductModel(ProductModel productModel) {
        this.productModel = productModel;
    }
}

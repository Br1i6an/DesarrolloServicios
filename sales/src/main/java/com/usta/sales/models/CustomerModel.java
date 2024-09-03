package com.usta.sales.models;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "customer")
public class CustomerModel implements Serializable{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "customer_id")
    private Long customerId;

    @Column(name = "customer_name")
    private String customerName;

    @Column(name = "customer_lastname")
    private String customerLastName;

    @Column(name = "customer_document")
    private String customerDocument;

    @Column(name = "customer_phonenumber")
    private String customerPhoneNumber;

    public CustomerModel() {
    }

    public CustomerModel(Long customerId, String customerName, String customerLastName, String customerDocument, String customerPhoneNumber) {
        this.customerId = customerId;
        this.customerName = customerName;
        this.customerLastName = customerLastName;
        this.customerDocument = customerDocument;
        this.customerPhoneNumber = customerPhoneNumber;
    }

    public Long getCustomerId() {
        return customerId;
    }

    public void setCustomerId(Long customerId) {
        this.customerId = customerId;
    }

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public String getCustomerLastName() {
        return customerLastName;
    }

    public void setCustomerLastName(String customerLastName) {
        this.customerLastName = customerLastName;
    }

    public String getCustomerDocument() {
        return customerDocument;
    }

    public void setCustomerDocument(String customerDocument) {
        this.customerDocument = customerDocument;
    }

    public String getCustomerPhoneNumber() {
        return customerPhoneNumber;
    }

    public void setCustomerPhoneNumber(String customerPhoneNumber) {
        this.customerPhoneNumber = customerPhoneNumber;
    }
}

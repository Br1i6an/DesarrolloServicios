package com.usta.springproject.models;

import javax.persistence.*;

@Entity
@Table(name = "customer")
public class CustomerModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "customer_id")
    private Long customerId;

    @Column(name = "identification")
    private String identification;

    @Column(name = "customer_name")
    private String customerName;

    @Column(name = "customer_lastname")
    private String customerLastname;

    @Column(name = "address")
    private String address;

    @Column(name = "phone")
    private String phone;

    public CustomerModel() {
    }

    public CustomerModel(Long customerId, String identification, String customerName, String customerLastname, String address, String phone) {
        this.customerId = customerId;
        this.identification = identification;
        this.customerName = customerName;
        this.customerLastname = customerLastname;
        this.address = address;
        this.phone = phone;
    }

    public Long getCustomerId() {
        return customerId;
    }

    public void setCustomerId(Long customerId) {
        this.customerId = customerId;
    }

    public String getIdentification() {
        return identification;
    }

    public void setIdentification(String identification) {
        this.identification = identification;
    }

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public String getCustomerLastname() {
        return customerLastname;
    }

    public void setCustomerLastname(String customerLastname) {
        this.customerLastname = customerLastname;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }
}

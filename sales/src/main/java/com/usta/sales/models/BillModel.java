package com.usta.sales.models;

import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
@Table(name = "bill")
public class BillModel implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "bill_id")
    private Long billId;

    @Column(name = "bill_total")
    private Integer billTotal;

    @Column(name = "bill_date")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    @Temporal(TemporalType.DATE)
    private Date billDate;

    @JoinColumn(name = "product_id", referencedColumnName = "product_id")
    @ManyToOne(fetch = FetchType.EAGER)
    private ProductModel productModel;

    public BillModel() {
    }

    public BillModel(Long billId, Integer billTotal, Date billDate, ProductModel productModel) {
        this.billId = billId;
        this.billTotal = billTotal;
        this.billDate = billDate;
        this.productModel = productModel;
    }

    public Long getBillId() {
        return billId;
    }

    public void setBillId(Long billId) {
        this.billId = billId;
    }

    public Integer getBillTotal() {
        return billTotal;
    }

    public void setBillTotal(Integer billTotal) {
        this.billTotal = billTotal;
    }

    public Date getBillDate() {
        return billDate;
    }

    public void setBillDate(Date billDate) {
        this.billDate = billDate;
    }

    public ProductModel getProductModel() {
        return productModel;
    }

    public void setProductModel(ProductModel productModel) {
        this.productModel = productModel;
    }
}

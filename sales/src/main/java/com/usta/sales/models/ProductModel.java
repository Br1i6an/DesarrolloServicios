package com.usta.sales.models;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "product")
public class ProductModel implements Serializable{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "product_id")
    private Long productId;

    @Column(name = "product_name")
    private String productName;

    @Column(name = "product_availableamount")
    private Integer productAvailableAmount;

    @Column(name = "product_description")
    private String productDescription;

    @Column(name = "product_value")
    private Integer productValue;

    @Column(name = "product_iva")
    private Double productIva;

    @JoinColumn(name = "provider_id", referencedColumnName = "provider_id")
    @ManyToOne(fetch = FetchType.EAGER)
    private ProviderModel providerModel;

    public ProductModel() {
    }

    public ProductModel(Long productId, String productName, Integer productAvailableAmount, String productDescription, Integer productValue, Double productIva, ProviderModel providerModel) {
        this.productId = productId;
        this.productName = productName;
        this.productAvailableAmount = productAvailableAmount;
        this.productDescription = productDescription;
        this.productValue = productValue;
        this.productIva = productIva;
        this.providerModel = providerModel;
    }

    public Long getProductId() {
        return productId;
    }

    public void setProductId(Long productId) {
        this.productId = productId;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public Integer getProductAvailableAmount() {
        return productAvailableAmount;
    }

    public void setProductAvailableAmount(Integer productAvailableAmount) {
        this.productAvailableAmount = productAvailableAmount;
    }

    public String getProductDescription() {
        return productDescription;
    }

    public void setProductDescription(String productDescription) {
        this.productDescription = productDescription;
    }

    public Integer getProductValue() {
        return productValue;
    }

    public void setProductValue(Integer productValue) {
        this.productValue = productValue;
    }

    public Double getProductIva() {
        return productIva;
    }

    public void setProductIva(Double productIva) {
        this.productIva = productIva;
    }

    public ProviderModel getProviderModel() {
        return providerModel;
    }

    public void setProviderModel(ProviderModel providerModel) {
        this.providerModel = providerModel;
    }
}

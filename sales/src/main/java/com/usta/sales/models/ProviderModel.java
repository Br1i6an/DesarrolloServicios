package com.usta.sales.models;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "provider")
public class ProviderModel implements Serializable{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "provider_id")
    private Long providerId;

    @Column(name = "provider_name")
    private String providerName;

    @Column(name = "provider_nit")
    private String providerNit;

    @Column(name = "provider_address")
    private String providerAddress;

    public ProviderModel() {
    }

    public ProviderModel(Long providerId, String providerName, String providerNit, String providerAddress) {
        this.providerId = providerId;
        this.providerName = providerName;
        this.providerNit = providerNit;
        this.providerAddress = providerAddress;
    }

    public Long getProviderId() {
        return providerId;
    }

    public void setProviderId(Long providerId) {
        this.providerId = providerId;
    }

    public String getProviderName() {
        return providerName;
    }

    public void setProviderName(String providerName) {
        this.providerName = providerName;
    }

    public String getProviderNit() {
        return providerNit;
    }

    public void setProviderNit(String providerNit) {
        this.providerNit = providerNit;
    }

    public String getProviderAddress() {
        return providerAddress;
    }

    public void setProviderAddress(String providerAddress) {
        this.providerAddress = providerAddress;
    }
}

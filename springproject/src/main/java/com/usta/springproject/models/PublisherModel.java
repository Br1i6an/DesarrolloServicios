package com.usta.springproject.models;

import javax.persistence.*;

@Entity
@Table(name = "publisher")
public class PublisherModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "publisher_id")
    private Long publisherId;

    @Column(name = "publisher_name")
    private String publisherName;

    @Column(name = "country")
    private String country;

    @Column(name = "phone")
    private String phone;

    public PublisherModel() {
    }

    public PublisherModel(Long publisherId, String publisherName, String country, String phone) {
        this.publisherId = publisherId;
        this.publisherName = publisherName;
        this.country = country;
        this.phone = phone;
    }

    public Long getPublisherId() {
        return publisherId;
    }

    public void setPublisherId(Long publisherId) {
        this.publisherId = publisherId;
    }

    public String getPublisherName() {
        return publisherName;
    }

    public void setPublisherName(String publisherName) {
        this.publisherName = publisherName;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }
}

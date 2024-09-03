package com.usta.springproject.models;

import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "detail_lend")
public class DetailLendModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "detail_lend_id")
    private Long detailLendId;

    @JoinColumn(name = "lend_id", referencedColumnName = "lend_id")
    @ManyToOne(fetch = FetchType.EAGER)
    private LendModel lendModel;

    @JoinColumn(name = "book_id", referencedColumnName = "book_id")
    @ManyToOne(fetch = FetchType.EAGER)
    private BookModel bookModel;

    @Column(name = "return_date")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    @Temporal(TemporalType.DATE)
    private Date returnDate;

    @Column(name = "days_late")
    private Integer daysLate;

    @Column(name = "description")
    private String description;

    @Column(name = "delivery_day")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    @Temporal(TemporalType.DATE)
    private Date deliveryDay;

    public DetailLendModel() {
    }

    public DetailLendModel(Long detailLendId, LendModel lendModel, BookModel bookModel, Date returnDate, Integer daysLate, String description, Date deliveryDay) {
        this.detailLendId = detailLendId;
        this.lendModel = lendModel;
        this.bookModel = bookModel;
        this.returnDate = returnDate;
        this.daysLate = daysLate;
        this.description = description;
        this.deliveryDay = deliveryDay;
    }

    public Long getDetailLendId() {
        return detailLendId;
    }

    public void setDetailLendId(Long detailLendId) {
        this.detailLendId = detailLendId;
    }

    public LendModel getLendModel() {
        return lendModel;
    }

    public void setLendModel(LendModel lendModel) {
        this.lendModel = lendModel;
    }

    public BookModel getBookModel() {
        return bookModel;
    }

    public void setBookModel(BookModel bookModel) {
        this.bookModel = bookModel;
    }

    public Date getReturnDate() {
        return returnDate;
    }

    public void setReturnDate(Date returnDate) {
        this.returnDate = returnDate;
    }

    public Integer getDaysLate() {
        return daysLate;
    }

    public void setDaysLate(Integer daysLate) {
        this.daysLate = daysLate;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getDeliveryDay() {
        return deliveryDay;
    }

    public void setDeliveryDay(Date deliveryDay) {
        this.deliveryDay = deliveryDay;
    }
}

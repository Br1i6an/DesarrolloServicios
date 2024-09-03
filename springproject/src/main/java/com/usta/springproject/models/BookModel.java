package com.usta.springproject.models;

import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "book")
public class BookModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "book_id")
    private Long bookId;

    @Column(name = "book_title")
    private String bookTitle;

    @Column(name = "publication_date")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    @Temporal(TemporalType.DATE)
    private Date publicationDate;

    @Column(name = "code")
    private Integer code;

    @Column(name = "isbn")
    private Integer isbn;

    @JoinColumn(name = "publisher_id", referencedColumnName = "publisher_id")
    @ManyToOne(fetch = FetchType.EAGER)
    private PublisherModel publisherModel;

    public BookModel() {
    }

    public BookModel(Long bookId, String bookTitle, Date publicationDate, Integer code, Integer isbn, PublisherModel publisherModel) {
        this.bookId = bookId;
        this.bookTitle = bookTitle;
        this.publicationDate = publicationDate;
        this.code = code;
        this.isbn = isbn;
        this.publisherModel = publisherModel;
    }

    public Long getBookId() {
        return bookId;
    }

    public void setBookId(Long bookId) {
        this.bookId = bookId;
    }

    public String getBookTitle() {
        return bookTitle;
    }

    public void setBookTitle(String bookTitle) {
        this.bookTitle = bookTitle;
    }

    public Date getPublicationDate() {
        return publicationDate;
    }

    public void setPublicationDate(Date publicationDate) {
        this.publicationDate = publicationDate;
    }

    public Integer getCode() {
        return code;
    }

    public void setCode(Integer code) {
        this.code = code;
    }

    public Integer getIsbn() {
        return isbn;
    }

    public void setIsbn(Integer isbn) {
        this.isbn = isbn;
    }

    public PublisherModel getpublisherModel() {
        return publisherModel;
    }

    public void setpublisherModel(PublisherModel publisherModel) {
        this.publisherModel = publisherModel;
    }
}

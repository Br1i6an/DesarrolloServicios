package com.usta.springproject.models;


import javax.persistence.*;

@Entity
@Table(name = "author_book")
public class AuthorBookModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "author_book_id")
    private Long authorBookId;

    @JoinColumn(name = "author_id", referencedColumnName = "author_id")
    @ManyToOne(fetch = FetchType.EAGER)
    private AuthorModel authorModel;

    @JoinColumn(name = "book_id", referencedColumnName = "book_id")
    @ManyToOne(fetch = FetchType.EAGER)
    private BookModel bookModel;

    public AuthorBookModel() {
    }

    public AuthorBookModel(Long authorBookId, AuthorModel authorModel, BookModel bookModel) {
        this.authorBookId = authorBookId;
        this.authorModel = authorModel;
        this.bookModel = bookModel;
    }

    public Long getAuthorBookId() {
        return authorBookId;
    }

    public void setAuthorBookId(Long authorBookId) {
        this.authorBookId = authorBookId;
    }

    public AuthorModel getAuthorModel() {
        return authorModel;
    }

    public void setAuthorModel(AuthorModel authorModel) {
        this.authorModel = authorModel;
    }

    public BookModel getBookModel() {
        return bookModel;
    }

    public void setBookModel(BookModel bookModel) {
        this.bookModel = bookModel;
    }
}

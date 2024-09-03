package com.usta.springproject.models;

import javax.persistence.*;

@Entity
@Table(name = "author")
public class AuthorModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "author_id")
    private Long authorId;

    @Column(name = "author_name")
    private String authorName;

    @Column(name = "author_lastname")
    private String authorLastname;

    @Column(name = "nationality")
    private String nationality;

    @Column(name = "description")
    private String description;

    public AuthorModel() {
    }

    public AuthorModel(Long authorId, String authorName, String authorLastname, String nationality, String description) {
        this.authorId = authorId;
        this.authorName = authorName;
        this.authorLastname = authorLastname;
        this.nationality = nationality;
        this.description = description;
    }

    public Long getAuthorId() {
        return authorId;
    }

    public void setAuthorId(Long authorId) {
        this.authorId = authorId;
    }

    public String getAuthorName() {
        return authorName;
    }

    public void setAuthorName(String authorName) {
        this.authorName = authorName;
    }

    public String getAuthorLastname() {
        return authorLastname;
    }

    public void setAuthorLastname(String authorLastname) {
        this.authorLastname = authorLastname;
    }

    public String getNationality() {
        return nationality;
    }

    public void setNationality(String nationality) {
        this.nationality = nationality;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @Override
    public String toString() {
        return "Authors";
    }
}

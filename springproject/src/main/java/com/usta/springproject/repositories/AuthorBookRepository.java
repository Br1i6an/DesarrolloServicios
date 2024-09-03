package com.usta.springproject.repositories;

import com.usta.springproject.models.AuthorBookModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface AuthorBookRepository extends JpaRepository<AuthorBookModel, Long> {
    @Query("SELECT COUNT(authb) FROM AuthorBookModel authb")
    public Integer countAuthorBookModel();
}

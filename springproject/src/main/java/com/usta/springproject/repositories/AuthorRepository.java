package com.usta.springproject.repositories;

import com.usta.springproject.models.AuthorModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface AuthorRepository extends JpaRepository<AuthorModel, Long> {
    @Query("SELECT COUNT(authb) FROM AuthorModel authb")
    public Integer countAuthorModel();
}

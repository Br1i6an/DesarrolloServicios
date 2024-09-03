package com.usta.springproject.repositories;

import com.usta.springproject.models.PublisherModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface PublisherRepository extends JpaRepository<PublisherModel, Long> {
    @Query("SELECT COUNT(pub) FROM PublisherModel pub")
    public Integer countPublisherModel();

    @Query(value = "SELECT p.publisherName, b.bookId, b.bookTitle FROM PublisherModel p INNER JOIN BookModel b ON " +
            "p.publisherId = b.publisherModel.publisherId WHERE b.bookId = :id")
    public String publisherByBookId(Long id);


}

package com.usta.springproject.repositories;

import com.usta.springproject.models.BookModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface BookRepository extends JpaRepository<BookModel, Long> {
    @Query("SELECT COUNT(bo) FROM BookModel bo")
    public Integer countBookModel();

    @Query(value = "SELECT b.bookId, b.bookTitle, d.detailLendId, d.description" +
            "    FROM BookModel b" +
            "    INNER JOIN DetailLendModel d ON d.bookModel.bookId = b.bookId" +
            "    WHERE d.detailLendId = :id")
    public String bookByLendId (Long id);
}

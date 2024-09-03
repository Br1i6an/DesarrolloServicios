package com.usta.springproject.services;

import com.usta.springproject.models.BookModel;
import com.usta.springproject.repositories.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookService {
    
    @Autowired
    private BookRepository bookRepository;

    public List<BookModel> list(){
        return bookRepository.findAll();
    }

    public BookModel create(BookModel customer){
        return bookRepository.save(customer);
    }

    public Optional<BookModel> find(Long id){
        return bookRepository.findById(id);
    }

    public void delete(Long id){
        bookRepository.deleteById(id);
    }

    //Specific Methods.

    public Integer count(){
        return bookRepository.countBookModel();
    }

    public String bookByLendId(Long id){
        return bookRepository.bookByLendId(id);
    }
    
}

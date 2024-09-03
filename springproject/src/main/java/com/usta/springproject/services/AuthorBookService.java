package com.usta.springproject.services;

import com.usta.springproject.models.AuthorBookModel;
import com.usta.springproject.repositories.AuthorBookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AuthorBookService {

    @Autowired
    private AuthorBookRepository authorBookRepository;

    public List<AuthorBookModel> list(){
        return authorBookRepository.findAll();
    }

    public AuthorBookModel create(AuthorBookModel customer){
        return authorBookRepository.save(customer);
    }

    public Optional<AuthorBookModel> find(Long id){
        return authorBookRepository.findById(id);
    }

    public void delete(Long id){
        authorBookRepository.deleteById(id);
    }

    //Specific Methods.

    public Integer count(){
        return authorBookRepository.countAuthorBookModel();
    }
}

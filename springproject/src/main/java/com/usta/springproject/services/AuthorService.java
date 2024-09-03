package com.usta.springproject.services;

import com.usta.springproject.models.AuthorModel;
import com.usta.springproject.repositories.AuthorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AuthorService {
    
    @Autowired
    private AuthorRepository authorRepository;

    public List<AuthorModel> list(){
        return authorRepository.findAll();
    }

    public AuthorModel create(AuthorModel customer){
        return authorRepository.save(customer);
    }

    public Optional<AuthorModel> find(Long id){
        return authorRepository.findById(id);
    }

    public void delete(Long id){
        authorRepository.deleteById(id);
    }

    //Specific Methods.

    public Integer count(){
        return authorRepository.countAuthorModel();
    }
}

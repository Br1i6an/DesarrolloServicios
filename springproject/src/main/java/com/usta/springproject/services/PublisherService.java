package com.usta.springproject.services;

import com.usta.springproject.models.PublisherModel;
import com.usta.springproject.repositories.PublisherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PublisherService {
    
    @Autowired
    private PublisherRepository publisherRepository;

    public List<PublisherModel> list(){
        return publisherRepository.findAll();
    }

    public PublisherModel create(PublisherModel customer){
        return publisherRepository.save(customer);
    }

    public Optional<PublisherModel> find(Long id){
        return publisherRepository.findById(id);
    }

    public void delete(Long id){
        publisherRepository.deleteById(id);
    }

    //Specific Methods.

    public Integer count(){
        return publisherRepository.countPublisherModel();
    }

    public String publisherByBookId(Long id){
        return publisherRepository.publisherByBookId(id);
    }
}

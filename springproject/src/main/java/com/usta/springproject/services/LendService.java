package com.usta.springproject.services;

import com.usta.springproject.models.LendModel;
import com.usta.springproject.repositories.LendRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LendService {
    @Autowired
    private LendRepository lendRepository;

    public List<LendModel> list(){
        return lendRepository.findAll();
    }

    public LendModel create(LendModel customer){
        return lendRepository.save(customer);
    }

    public Optional<LendModel> find(Long id){
        return lendRepository.findById(id);
    }

    public void delete(Long id){
        lendRepository.deleteById(id);
    }

    //Specific Methods.

    public Integer count(){
        return lendRepository.countLendModel();
    }
}

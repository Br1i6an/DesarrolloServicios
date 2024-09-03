package com.usta.springproject.services;

import com.usta.springproject.models.DetailLendModel;
import com.usta.springproject.repositories.DetailLendRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DetailLendService {
    
    @Autowired
    private DetailLendRepository detailLendRepository;

    public List<DetailLendModel> list(){
        return detailLendRepository.findAll();
    }

    public DetailLendModel create(DetailLendModel customer){
        return detailLendRepository.save(customer);
    }

    public Optional<DetailLendModel> find(Long id){
        return detailLendRepository.findById(id);
    }

    public void delete(Long id){
        detailLendRepository.deleteById(id);
    }

    //Specific Methods.

    public Integer count(){
        return detailLendRepository.countDetailLendModel();
    }
}

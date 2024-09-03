package com.usta.entries1.services;

import com.usta.entries1.models.AccessesModel;
import com.usta.entries1.repositories.AccessesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AccessesService {

    @Autowired
    private AccessesRepository accessesRepository;

    public List<AccessesModel> listAccesses(){
        return accessesRepository.findAll();
    }
    public AccessesModel createAccess(AccessesModel accesses){
        return accessesRepository.save(accesses);
    }
    public AccessesModel editAccess(AccessesModel accesses){
        return accessesRepository.save(accesses);
    }
    public Optional<AccessesModel> findAccess(Long id){
        return accessesRepository.findById(id);
    }
    public void deleteAccess(Long id){
        accessesRepository.deleteById(id);
    }
}

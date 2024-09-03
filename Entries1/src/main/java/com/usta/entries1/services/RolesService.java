package com.usta.entries1.services;

import com.usta.entries1.models.RolesModel;
import com.usta.entries1.repositories.RolesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RolesService {

    @Autowired
    private RolesRepository rolesRepository;

    public List<RolesModel> getlistRoles(){
        return rolesRepository.findAll();
    }
    public RolesModel createRole(RolesModel roles){
        return rolesRepository.save(roles);
    }
    public RolesModel editRole(RolesModel roles){
        return rolesRepository.save(roles);
    }
    public Optional<RolesModel> findRole(Long id){
        return rolesRepository.findById(id);
    }
    public void deleteRole(Long id){
        rolesRepository.deleteById(id);
    }
}

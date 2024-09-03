package com.usta.entryspring.services;

import com.usta.entryspring.models.UsersModel;
import com.usta.entryspring.repositories.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UsersService {

    @Autowired
    private UsersRepository usersRepository;

    public List<UsersModel> listUsers(){
        return usersRepository.findAll();
    }
    public UsersModel createUser(UsersModel users){
        return usersRepository.save(users);
    }
    public UsersModel editUser(UsersModel users){
        return usersRepository.save(users);
    }
    public Optional<UsersModel> findUser(Long id){
        return usersRepository.findById(id);
    }
    public void deleteUser(Long id){
        usersRepository.deleteById(id);
    }
}

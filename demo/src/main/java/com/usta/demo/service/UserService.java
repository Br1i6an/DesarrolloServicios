package com.usta.demo.service;

import com.usta.demo.entity.Usuario;
import com.usta.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.ArrayList;

@Service
public class UserService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(@RequestBody String username) throws UsernameNotFoundException {

        Usuario us = userRepository.findByUsername(username);
        String user = us.getUsername();
        String pass = us.getPassword();

        return new User(user,pass, new ArrayList<>());
    }
}

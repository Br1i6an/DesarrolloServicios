package com.usta.demo.repository;

import com.usta.demo.entity.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface UserRepository extends JpaRepository<Usuario, Long> {
    @Query("select u from Usuario u where u.username=?1")
    public Usuario findByUsername(String term);
}

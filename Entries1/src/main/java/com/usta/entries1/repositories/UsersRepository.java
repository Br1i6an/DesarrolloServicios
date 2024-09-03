package com.usta.entries1.repositories;

import com.usta.entries1.models.UsersModel;
import org.springframework.data.jpa.repository.JpaRepository;
public interface UsersRepository extends JpaRepository<UsersModel, Long>{
}

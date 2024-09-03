package com.usta.entryspring.repositories;

import com.usta.entryspring.models.UsersModel;
import org.springframework.data.jpa.repository.JpaRepository;
public interface UsersRepository extends JpaRepository<UsersModel, Long>{
}

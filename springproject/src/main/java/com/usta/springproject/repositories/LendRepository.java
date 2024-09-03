package com.usta.springproject.repositories;

import com.usta.springproject.models.LendModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface LendRepository extends JpaRepository<LendModel, Long> {
    @Query("SELECT COUNT(lend) FROM LendModel lend")
    public Integer countLendModel();
}

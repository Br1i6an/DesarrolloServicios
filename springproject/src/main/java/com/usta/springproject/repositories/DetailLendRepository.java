package com.usta.springproject.repositories;

import com.usta.springproject.models.DetailLendModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface DetailLendRepository extends JpaRepository<DetailLendModel, Long> {
    @Query("SELECT COUNT(del) FROM DetailLendModel del")
    public Integer countDetailLendModel();
}

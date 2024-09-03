package com.usta.sales.repositories;

import com.usta.sales.models.BillModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BillRepository extends JpaRepository<BillModel,Long>{
}

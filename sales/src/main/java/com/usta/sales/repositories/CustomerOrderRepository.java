package com.usta.sales.repositories;


import com.usta.sales.models.CustomerOrderModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerOrderRepository extends JpaRepository<CustomerOrderModel,Long>{
}

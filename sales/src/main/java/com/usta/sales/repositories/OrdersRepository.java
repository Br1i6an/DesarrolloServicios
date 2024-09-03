package com.usta.sales.repositories;

import com.usta.sales.models.OrdersModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrdersRepository extends JpaRepository<OrdersModel,Long> {
}

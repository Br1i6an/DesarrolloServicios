package com.usta.sales.repositories;

import com.usta.sales.models.OrderDetailModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderDetailRepository extends JpaRepository<OrderDetailModel,Long> {
}

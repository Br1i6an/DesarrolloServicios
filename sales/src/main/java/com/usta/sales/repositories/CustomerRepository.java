package com.usta.sales.repositories;

import com.usta.sales.models.CustomerModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<CustomerModel,Long> {
}

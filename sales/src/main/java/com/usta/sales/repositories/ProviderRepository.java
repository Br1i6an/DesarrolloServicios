package com.usta.sales.repositories;

import com.usta.sales.models.ProviderModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProviderRepository extends JpaRepository<ProviderModel,Long> {
}

package com.usta.entries1.repositories;

import com.usta.entries1.models.AlertsModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AlertsRepository extends JpaRepository<AlertsModel,Long>{
}

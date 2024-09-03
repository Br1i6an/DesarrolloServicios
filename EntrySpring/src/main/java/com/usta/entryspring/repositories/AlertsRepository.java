package com.usta.entryspring.repositories;

import com.usta.entryspring.models.AlertsModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AlertsRepository extends JpaRepository<AlertsModel,Long>{
}

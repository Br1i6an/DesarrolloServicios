package com.usta.entries1.repositories;

import com.usta.entries1.models.EntriesModel;
import org.springframework.data.jpa.repository.JpaRepository;
public interface EntriesRepository extends JpaRepository<EntriesModel, Long>{
}

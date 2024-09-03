package com.usta.entryspring.repositories;

import com.usta.entryspring.models.EntriesModel;
import org.springframework.data.jpa.repository.JpaRepository;
public interface EntriesRepository extends JpaRepository<EntriesModel, Long>{
}

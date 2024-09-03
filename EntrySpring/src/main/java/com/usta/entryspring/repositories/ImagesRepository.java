package com.usta.entryspring.repositories;

import com.usta.entryspring.models.ImagesModel;
import org.springframework.data.jpa.repository.JpaRepository;
public interface ImagesRepository extends JpaRepository<ImagesModel, Long>{
}

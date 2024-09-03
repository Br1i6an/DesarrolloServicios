package com.usta.crudspring.repo;

import com.usta.crudspring.models.Teachers;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TeacherRepository extends JpaRepository<Teachers, Long> {
}

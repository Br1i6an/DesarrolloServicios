package com.usta.crudspring.repo;

import com.usta.crudspring.models.Faculties;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FacultyRepository extends JpaRepository<Faculties,Long> {
}

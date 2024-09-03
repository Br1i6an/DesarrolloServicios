package com.usta.universityspring.repositories;

import com.usta.universityspring.model.Facultad;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface FacultadRepositorio extends JpaRepository<Facultad,Long> {

    @Query("SELECT COUNT(fac) FROM Facultad fac")
    public Integer counTotalFacultades();
}

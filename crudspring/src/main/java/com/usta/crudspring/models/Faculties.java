package com.usta.crudspring.models;

import javax.persistence.*;


@Entity
@Table(name="Faculties")
public class Faculties {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="faculty_id")
    private long facultyId;

    @Column (name="faculty_name")
    private String facultyName;

    public Faculties() {
    }

    public Faculties(long facultyId, String facultyName) {

        this.facultyId = facultyId;
        this.facultyName = facultyName;
    }

    public long getFacultyId() {
        return facultyId;
    }

    public void setFacultyId(long facultyId) {
        this.facultyId = facultyId;
    }

    public String getFacultyName() {
        return facultyName;
    }

    public void setFacultyName(String facultyName) {
        this.facultyName = facultyName;
    }
}

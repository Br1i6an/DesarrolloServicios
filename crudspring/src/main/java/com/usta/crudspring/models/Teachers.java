package com.usta.crudspring.models;

import javax.persistence.*;


@Entity
@Table(name="Teachers")
public class Teachers {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="teacher_id")
    private long teacherId;

    @Column (name="teacher_document")
    private String teacherDocument;

    @Column (name="teacher_name")
    private String teacherName;

    @Column (name="teacher_lastname")
    private String teacherLastName;

    public Teachers() {
    }

    public Teachers(long teacherId, String teacherDocument, String teacherName, String teacherLastName ) {

        this.teacherId = teacherId;
        this.teacherDocument = teacherDocument;
        this.teacherName = teacherName;
        this.teacherLastName = teacherLastName;
    }

    public long getTeacherId() {
        return teacherId;
    }

    public void setTeacherId(long teacherId) {
        this.teacherId = teacherId;
    }

    public String getTeacherDocument() {
        return teacherDocument;
    }

    public void setTeacherDocument(String teacherDocument) {
        this.teacherDocument = teacherDocument;
    }

    public String getTeacherName() {
        return teacherName;
    }

    public void setTeacherName(String teacherName) {
        this.teacherName = teacherName;
    }

    public String getTeacherLastName() {
        return teacherLastName;
    }

    public void setTeacherLastName(String teacherLastName) {
        this.teacherLastName = teacherLastName;
    }
}

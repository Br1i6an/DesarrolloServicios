package com.usta.entryspring.models;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "users")
public class UsersModel implements Serializable{
    private static final long serialVersion=1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private Long userId;

    @JoinColumn(name = "role_id", referencedColumnName = "role_id")
    @ManyToOne(fetch = FetchType.EAGER)
    private RolesModel rolesModel;

    @Column(name = "user_document")
    private String userDocument;

    @Column(name = "user_documenttype")
    private Integer userDocumentType;

    @Column(name = "user_name")
    private String userName;

    @Column(name = "user_lastname")
    private String userLastName;

    @Column(name = "user_phonenumber")
    private String userPhoneNumber;

    @Column(name = "user_status")
    private Integer userStatus;

    public UsersModel() {
    }

    public UsersModel(Long userId, RolesModel rolesModel, String userDocument, Integer userDocumentType, String userName, String userLastName, String userPhoneNumber, Integer userStatus) {
        this.userId = userId;
        this.rolesModel = rolesModel;
        this.userDocument = userDocument;
        this.userDocumentType = userDocumentType;
        this.userName = userName;
        this.userLastName = userLastName;
        this.userPhoneNumber = userPhoneNumber;
        this.userStatus = userStatus;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public RolesModel getRolesModel() {
        return rolesModel;
    }

    public void setRolesModel(RolesModel rolesModel) {
        this.rolesModel = rolesModel;
    }

    public String getUserDocument() {
        return userDocument;
    }

    public void setUserDocument(String userDocument) {
        this.userDocument = userDocument;
    }

    public Integer getUserDocumentType() {
        return userDocumentType;
    }

    public void setUserDocumentType(Integer userDocumentType) {
        this.userDocumentType = userDocumentType;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getUserLastName() {
        return userLastName;
    }

    public void setUserLastName(String userLastName) {
        this.userLastName = userLastName;
    }

    public String getUserPhoneNumber() {
        return userPhoneNumber;
    }

    public void setUserPhoneNumber(String userPhoneNumber) {
        this.userPhoneNumber = userPhoneNumber;
    }

    public Integer getUserStatus() {
        return userStatus;
    }

    public void setUserStatus(Integer userStatus) {
        this.userStatus = userStatus;
    }
}

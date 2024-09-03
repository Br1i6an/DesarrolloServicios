package com.usta.entries1.models;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "accesses")
public class AccessesModel implements Serializable {
    private static final long serialVersion=1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "access_id")
    private Long accesId;

    @JoinColumn(name = "user_id", referencedColumnName = "user_id")
    @ManyToOne(fetch = FetchType.EAGER)
    private UsersModel usersModel;

    @Column(name = "access_email")
    private String accessEmail;

    @Column(name = "access_password")
    private String accessPassword;

    public AccessesModel() {
    }

    public AccessesModel(Long accesId, UsersModel usersModel, String accessEmail, String accessPassword) {
        this.accesId = accesId;
        this.usersModel = usersModel;
        this.accessEmail = accessEmail;
        this.accessPassword = accessPassword;
    }

    public Long getAccesId() {
        return accesId;
    }

    public void setAccesId(Long accesId) {
        this.accesId = accesId;
    }

    public UsersModel getUsersModel() {
        return usersModel;
    }

    public void setUsersModel(UsersModel usersModel) {
        this.usersModel = usersModel;
    }

    public String getAccessEmail() {
        return accessEmail;
    }

    public void setAccessEmail(String accessEmail) {
        this.accessEmail = accessEmail;
    }

    public String getAccessPassword() {
        return accessPassword;
    }

    public void setAccessPassword(String accessPassword) {
        this.accessPassword = accessPassword;
    }
}

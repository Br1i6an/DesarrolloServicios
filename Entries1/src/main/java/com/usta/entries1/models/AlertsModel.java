package com.usta.entries1.models;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "alerts")
public class AlertsModel implements Serializable {
    private static final long serialVersion=1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "alert_id")
    private Long alertId;

    @JoinColumn(name = "user_id", referencedColumnName = "user_id")
    @ManyToOne(fetch = FetchType.EAGER)
    private UsersModel usersModel;

    @Column(name = "alert_days")
    private Integer alertDays;

    @Column(name = "alert_months")
    private Integer alertMonths;

    @Column(name = "alert_title")
    private String alertTitle;

    @Column(name = "alert_status")
    private Integer alertStatus;

    public AlertsModel() {
    }

    public AlertsModel(Long alertId, UsersModel usersModel, Integer alertDays, Integer alertMonths, String alertTitle, Integer alertStatus) {
        this.alertId = alertId;
        this.usersModel = usersModel;
        this.alertDays = alertDays;
        this.alertMonths = alertMonths;
        this.alertTitle = alertTitle;
        this.alertStatus = alertStatus;
    }

    public Long getAlertId() {
        return alertId;
    }

    public void setAlertId(Long alertId) {
        this.alertId = alertId;
    }

    public UsersModel getUsersModel() {
        return usersModel;
    }

    public void setUsersModel(UsersModel usersModel) {
        this.usersModel = usersModel;
    }

    public Integer getAlertDays() {
        return alertDays;
    }

    public void setAlertDays(Integer alertDays) {
        this.alertDays = alertDays;
    }

    public Integer getAlertMonths() {
        return alertMonths;
    }

    public void setAlertMonths(Integer alertMonths) {
        this.alertMonths = alertMonths;
    }

    public String getAlertTitle() {
        return alertTitle;
    }

    public void setAlertTitle(String alertTitle) {
        this.alertTitle = alertTitle;
    }

    public Integer getAlertStatus() {
        return alertStatus;
    }

    public void setAlertStatus(Integer alertStatus) {
        this.alertStatus = alertStatus;
    }
}

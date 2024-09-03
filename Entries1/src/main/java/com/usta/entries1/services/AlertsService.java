package com.usta.entries1.services;

import com.usta.entries1.models.AlertsModel;
import com.usta.entries1.repositories.AlertsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AlertsService {

    @Autowired
    private AlertsRepository alertsRepository;

    public List<AlertsModel> listAlerts(){
        return alertsRepository.findAll();
    }
    public AlertsModel createAlert(AlertsModel alerts){
        return alertsRepository.save(alerts);
    }
    public AlertsModel editAlert(AlertsModel alerts){
        return alertsRepository.save(alerts);
    }
    public Optional<AlertsModel> findAlert(Long id){
        return alertsRepository.findById(id);
    }
    public void deleteAlert(Long id){
        alertsRepository.deleteById(id);
    }

}

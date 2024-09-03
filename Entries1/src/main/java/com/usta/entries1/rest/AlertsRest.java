package com.usta.entries1.rest;

import com.usta.entries1.models.AlertsModel;
import com.usta.entries1.services.AlertsService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("api/alerts")
public class AlertsRest {
    private AlertsService alertsService;

    @GetMapping("/list")
    private ResponseEntity<List<AlertsModel>> listAlerts(){
        return ResponseEntity.ok(alertsService.listAlerts());
    }

    @PostMapping("/create")
    private ResponseEntity<AlertsModel> createAlerts(@RequestBody AlertsModel alerts){
        AlertsModel temporal = alertsService.createAlert(alerts);
        try{
            return ResponseEntity.created(new URI("/api/Alerts"+temporal.getAlertId())).body(alerts);
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }

    }

    @PutMapping("/edit")
    private ResponseEntity<AlertsModel>  editAlerts(@RequestBody AlertsModel alerts){
        AlertsModel temporal = alertsService.editAlert(alerts);
        try{
            return ResponseEntity.created(new URI("/api/Alerts"+temporal.getAlertId())).body(alerts);
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }


    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteAlerts(@PathVariable("id") Long id){
        alertsService.deleteAlert(id);
        return ResponseEntity.ok().build();
    }
}

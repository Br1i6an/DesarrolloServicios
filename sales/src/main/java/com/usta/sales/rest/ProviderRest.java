package com.usta.sales.rest;

import com.usta.sales.models.ProviderModel;
import com.usta.sales.services.ProviderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("api/providers")
public class ProviderRest {
    @Autowired
    private ProviderService providerService;

    @GetMapping("/list")
    private ResponseEntity<List<ProviderModel>> listProvider(){
        return ResponseEntity.ok(providerService.listProviders());
    }

    @PostMapping("/create")
    private ResponseEntity<ProviderModel> createProviders(@RequestBody ProviderModel provider){
        ProviderModel temporal = providerService.createProvider(provider);
        try{
            return ResponseEntity.created(new URI("/api/bills"+temporal.getProviderId())).body(provider);
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }

    }

    @PutMapping("/edit")
    private ResponseEntity<ProviderModel>  editProviders(@RequestBody ProviderModel provider){
        ProviderModel temporal = providerService.editProvider(provider);
        try{
            return ResponseEntity.created(new URI("/api/bills"+temporal.getProviderId())).body(provider);
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteProviders(@PathVariable("id") Long id){
        providerService.deleteProvider(id);
        return ResponseEntity.ok().build();
    }
}

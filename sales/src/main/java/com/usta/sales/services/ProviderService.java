package com.usta.sales.services;

import com.usta.sales.models.ProviderModel;
import com.usta.sales.repositories.ProviderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProviderService {

    @Autowired
    private ProviderRepository providerRepository;

    public List<ProviderModel> listProviders(){
        return providerRepository.findAll();}
    public  ProviderModel createProvider(ProviderModel provider){
        return providerRepository.save(provider);
    }
    public ProviderModel editProvider(ProviderModel provider){
        return providerRepository.save(provider);
    }
    public Optional<ProviderModel> findProvider(Long id){
        return providerRepository.findById(id);
    }
    public void deleteProvider(Long id){
        providerRepository.deleteById(id);
    }
}

package com.usta.entries1.services;

import com.usta.entries1.models.EntriesModel;
import com.usta.entries1.repositories.EntriesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EntriesService {

    @Autowired
    private EntriesRepository entriesRepository;

    public List<EntriesModel> listEntries(){
        return entriesRepository.findAll();
    }
    public EntriesModel createEntry(EntriesModel entries){
        return entriesRepository.save(entries);
    }
    public EntriesModel editEntry(EntriesModel entries){
        return entriesRepository.save(entries);
    }
    public Optional<EntriesModel> findEntry(Long id){
        return entriesRepository.findById(id);
    }
    public void deleteEntry(Long id){
        entriesRepository.deleteById(id);
    }
}

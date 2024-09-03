package com.usta.entries1.services;

import com.usta.entries1.models.ImagesModel;
import com.usta.entries1.repositories.ImagesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ImagesService {

    @Autowired
    private ImagesRepository imagesRepository;

    public List<ImagesModel> listImages(){
        return imagesRepository.findAll();
    }
    public ImagesModel createImage(ImagesModel images){
        return imagesRepository.save(images);
    }
    public ImagesModel editImage(ImagesModel images){
        return imagesRepository.save(images);
    }
    public Optional<ImagesModel> findImage(Long id){
        return imagesRepository.findById(id);
    }
    public void deleteImage(Long id){
        imagesRepository.deleteById(id);
    }
}

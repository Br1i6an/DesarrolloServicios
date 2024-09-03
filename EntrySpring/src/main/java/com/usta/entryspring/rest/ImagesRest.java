package com.usta.entryspring.rest;

import com.usta.entryspring.models.ImagesModel;
import com.usta.entryspring.services.ImagesService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("api/images")
public class ImagesRest {
    private ImagesService imagesService;

    @GetMapping("/list")
    private ResponseEntity<List<ImagesModel>> listImages(){
        return ResponseEntity.ok(imagesService.listImages());
    }

    @PostMapping("/create")
    private ResponseEntity<ImagesModel> createImages(@RequestBody ImagesModel images){
        ImagesModel temporal = imagesService.createImage(images);
        try{
            return ResponseEntity.created(new URI("/api/images"+temporal.getImageId())).body(images);
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }

    }

    @PutMapping("/edit")
    private ResponseEntity<ImagesModel>  editImages(@RequestBody ImagesModel images){
        ImagesModel temporal = imagesService.editImage(images);
        try{
            return ResponseEntity.created(new URI("/api/images"+temporal.getImageId())).body(images);
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }


    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteImages(@PathVariable("id") Long id){
        imagesService.deleteImage(id);
        return ResponseEntity.ok().build();
    }
}

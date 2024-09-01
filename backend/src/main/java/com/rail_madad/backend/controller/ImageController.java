package com.rail_madad.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.rail_madad.backend.model.Image;
import com.rail_madad.backend.repository.ImageRepo;

import java.io.IOException;
import java.util.Base64;

@RestController
@RequestMapping("/api")
public class ImageController {

    @Autowired
    private ImageRepo imageRepository;

    @CrossOrigin(origins = "http://localhost:5173")
    @PostMapping("/upload")
    public ResponseEntity<String> uploadImage(@RequestParam("image") MultipartFile file) {
        try {
            String encodedImage = Base64.getEncoder().encodeToString(file.getBytes());

            Image imageData = new Image(file.getOriginalFilename(), encodedImage);
            imageRepository.save(imageData);

            return new ResponseEntity<>("Image uploaded successfully", HttpStatus.OK);
        } catch (IOException e) {
            return new ResponseEntity<>("Failed to upload image", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}

package com.rail_madad.backend.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;

@Entity
public class Image {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String imageName;

    @Lob
    @Column(length = 100000)
    private String encodedImage;

    public Image() {
    }

    public Image(String imageName, String encodedImage) {
        this.imageName = imageName;
        this.encodedImage = encodedImage;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getImageName() {
        return imageName;
    }

    public void setImageName(String imageName) {
        this.imageName = imageName;
    }

    public String getencodedImage() {
        return encodedImage;
    }

    public void setencodedImage(String encodedImage) {
        this.encodedImage = encodedImage;
    }
}

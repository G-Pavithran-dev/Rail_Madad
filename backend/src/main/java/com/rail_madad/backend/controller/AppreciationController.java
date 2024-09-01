package com.rail_madad.backend.controller;

import com.rail_madad.backend.model.Appreciation;
import com.rail_madad.backend.service.AppreciationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/appreciations")
public class AppreciationController {

    @Autowired
    private AppreciationService appreciationService;

    @PostMapping
    public ResponseEntity<Appreciation> createAppreciation(@RequestBody Appreciation appreciation) {
        Appreciation savedAppreciation = appreciationService.saveAppreciation(appreciation);
        return ResponseEntity.ok(savedAppreciation);
    }

}

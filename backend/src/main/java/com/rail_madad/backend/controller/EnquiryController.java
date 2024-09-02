package com.rail_madad.backend.controller;

import com.rail_madad.backend.model.Enquiry;
import com.rail_madad.backend.service.EnquiryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("/api/enquiries")
public class EnquiryController {

    private final EnquiryService enquiryService;

    @Autowired
    public EnquiryController(EnquiryService enquiryService) {
        this.enquiryService = enquiryService;
    }

    @PostMapping("/submit")
    public ResponseEntity<String> submitEnquiry(@ModelAttribute Enquiry enquiryRequest,
            @RequestParam("file") MultipartFile file) {
        try {
            enquiryService.processEnquiry(enquiryRequest, file);
            return ResponseEntity.ok("Enquiry submitted successfully.");
        } catch (IOException e) {
            e.printStackTrace();
            return ResponseEntity.status(500).body("Failed to submit enquiry.");
        }
    }
}

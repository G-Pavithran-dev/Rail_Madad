package com.rail_madad.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.rail_madad.backend.model.Complaints;
import com.rail_madad.backend.service.ComplaintService;

import java.util.List;

@RestController
public class ComplaintController {

    @Autowired
    private ComplaintService complaintService;

    @CrossOrigin(origins = "http://localhost:5173")

    @PostMapping("/complaints")
    public Complaints createComplaint(@RequestBody Complaints complaint) {
        return complaintService.saveComplaint(complaint);
    }

    @GetMapping("/complaints")
    public List<Complaints> getAllComplaints() {
        return complaintService.getAllComplaints();
    }
}

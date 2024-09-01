package com.rail_madad.backend.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rail_madad.backend.model.Complaints;
import com.rail_madad.backend.repository.ComplaintRepo;

import java.util.List;

@Service
public class ComplaintService {

    @Autowired
    private ComplaintRepo complaintRepository;

    public Complaints saveComplaint(Complaints complaint) {
        return complaintRepository.save(complaint);
    }

    public List<Complaints> getAllComplaints() {
        return complaintRepository.findAll();
    }
}
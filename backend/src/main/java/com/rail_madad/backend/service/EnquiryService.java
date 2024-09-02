package com.rail_madad.backend.service;

import com.rail_madad.backend.model.Enquiry;
import com.rail_madad.backend.repository.EnquiryRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.time.LocalDateTime;

@Service
public class EnquiryService {

    private final EnquiryRepo enquiryRepo;

    @Autowired
    public EnquiryService(EnquiryRepo enquiryRepo) {
        this.enquiryRepo = enquiryRepo;
    }

    public void processEnquiry(Enquiry enquiryRequest, MultipartFile file) throws IOException {
        
        String type = enquiryRequest.getType();
        String subType = enquiryRequest.getSubType();
        LocalDateTime enquiryDate = enquiryRequest.getEnquiryDate();
        String mobileNumber = enquiryRequest.getMobileNumber();
        String filePath = null;

        if (file != null && !file.isEmpty()) {
            filePath = "uploads/" + file.getOriginalFilename();
            File destinationFile = new File(filePath);
            file.transferTo(destinationFile);
        }

        enquiryRequest.setFilePath(filePath);
        enquiryRepo.save(enquiryRequest);
    }
}

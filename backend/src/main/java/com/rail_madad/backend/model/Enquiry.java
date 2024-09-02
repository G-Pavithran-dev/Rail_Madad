package com.rail_madad.backend.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "enquiries")
public class Enquiry {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "type", nullable = false)
    private String type;

    @Column(name = "sub_type", nullable = false)
    private String subType;

    @Column(name = "enquiry_date", nullable = false)
    private LocalDateTime enquiryDate;

    @Column(name = "file_path")
    private String filePath;

    @Column(name = "mobile_number", nullable = false)
    private String mobileNumber;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getSubType() {
        return subType;
    }

    public void setSubType(String subType) {
        this.subType = subType;
    }

    public LocalDateTime getEnquiryDate() {
        return enquiryDate;
    }

    public void setEnquiryDate(LocalDateTime enquiryDate) {
        this.enquiryDate = enquiryDate;
    }

    public String getFilePath() {
        return filePath;
    }

    public void setFilePath(String filePath) {
        this.filePath = filePath;
    }

    public String getMobileNumber() {
        return mobileNumber;
    }

    public void setMobileNumber(String mobileNumber) {
        this.mobileNumber = mobileNumber;
    }
}

package com.rail_madad.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.rail_madad.backend.model.Enquiry;

@Repository
public interface EnquiryRepo extends JpaRepository<Enquiry,Long>{
    
}

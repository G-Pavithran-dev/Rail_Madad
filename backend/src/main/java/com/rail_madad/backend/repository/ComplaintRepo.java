package com.rail_madad.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.rail_madad.backend.model.Complaints;

@Repository
public interface ComplaintRepo extends JpaRepository<Complaints, Integer> {
    
}

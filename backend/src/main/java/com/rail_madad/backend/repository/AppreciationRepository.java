package com.rail_madad.backend.repository;

import com.rail_madad.backend.model.Appreciation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AppreciationRepository extends JpaRepository<Appreciation, Long> {
    
}

package com.rail_madad.backend.service;

import com.rail_madad.backend.model.Appreciation;
import com.rail_madad.backend.repository.AppreciationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class AppreciationService {

    @Autowired
    private AppreciationRepository appreciationRepository;

    public Appreciation saveAppreciation(Appreciation appreciation) {
        return appreciationRepository.save(appreciation);
    }
}

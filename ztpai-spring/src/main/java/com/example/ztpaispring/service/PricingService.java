package com.example.ztpaispring.service;

import com.example.ztpaispring.entity.Pricing;
import com.example.ztpaispring.repository.PricingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class PricingService {
    private final PricingRepository pricingRepository;

    @Autowired
    public PricingService(PricingRepository pricingRepository) {
        this.pricingRepository = pricingRepository;
    }

    public List<Pricing> getAllPrices() {
        return pricingRepository.findAll();

    }

    public void deletePrice(UUID priceId) {pricingRepository.deleteById(priceId);
    }

    public Pricing createNewPricing(Pricing pricing) {
        return pricingRepository.save( pricing);

    }
}

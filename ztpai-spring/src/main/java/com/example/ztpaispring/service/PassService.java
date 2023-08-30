package com.example.ztpaispring.service;

import com.example.ztpaispring.entity.Pass;
import com.example.ztpaispring.entity.Pricing;
import com.example.ztpaispring.entity.User;
import com.example.ztpaispring.repository.PassRepository;
import com.example.ztpaispring.repository.PricingRepository;
import com.example.ztpaispring.repository.UserRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class PassService {

    @Autowired
    private PassRepository passRepository;

    @Autowired
    private PricingRepository pricingRepository;
    @Autowired
    private UserRepository userRepository;

    public void assignPassToUser(UUID userId, UUID pricingId) {
        User user = userRepository.findById(userId).orElseThrow(() -> new EntityNotFoundException("User not found"));
        Pricing pricing = pricingRepository.findById(pricingId).orElseThrow(() -> new EntityNotFoundException("Pricing not found"));

        Pass pass = new Pass();
        pass.setPricing(pricing);
        pass.setExpires();
        pass.setUserPass(user);


        passRepository.save(pass);
    }

    public List<Pass> getPassesByUserId(UUID userId) {
        User user = userRepository.findById(userId).orElseThrow(() -> new EntityNotFoundException("User not found"));
        return user.getPasses();
    }
}

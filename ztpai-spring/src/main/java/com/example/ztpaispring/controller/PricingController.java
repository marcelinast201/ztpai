package com.example.ztpaispring.controller;

import com.example.ztpaispring.entity.Activity;
import com.example.ztpaispring.entity.Pricing;
import com.example.ztpaispring.service.ActivityService;
import com.example.ztpaispring.service.PricingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/pricing")
public class PricingController {
    private final PricingService pricingService;

    @Autowired
    public PricingController(PricingService pricingService) {
        this.pricingService = pricingService;
    }

    @GetMapping
    public ResponseEntity<List<Pricing>> getAllPrices() {
        List<Pricing> pricing = pricingService.getAllPrices();
        return new ResponseEntity<>(pricing, HttpStatus.OK);
    }
    @DeleteMapping("/delete/{priceId}")
    public void deletePrice(@PathVariable UUID priceId){
        pricingService.deletePrice(priceId);
    }

    @PostMapping("/createPricing")
    public ResponseEntity<Pricing> createPricing(@RequestBody Pricing pricing) {
        Pricing addPricing= pricingService.createNewPricing(pricing);
        return new ResponseEntity<>(addPricing, HttpStatus.CREATED);
    }


}

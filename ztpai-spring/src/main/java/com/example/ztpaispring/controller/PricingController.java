package com.example.ztpaispring.controller;

import com.example.ztpaispring.entity.Activity;
import com.example.ztpaispring.entity.Pricing;
import com.example.ztpaispring.service.ActivityService;
import com.example.ztpaispring.service.PricingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

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

}

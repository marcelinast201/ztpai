package com.example.ztpaispring.controller;

import com.example.ztpaispring.service.PassService;
import com.example.ztpaispring.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/pass")
@RequiredArgsConstructor

public class PassController {
    private final PassService passService;
    @PostMapping("/{userId}/assign")
    public ResponseEntity<String> assignPassToUser(@PathVariable UUID userId, @RequestBody String pricingId) {
        passService.assignPassToUser(userId, UUID.fromString(pricingId));
        return ResponseEntity.ok("Pass assigned successfully");
    }
}


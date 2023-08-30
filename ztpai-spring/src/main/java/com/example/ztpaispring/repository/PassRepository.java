package com.example.ztpaispring.repository;

import com.example.ztpaispring.entity.Pass;
import com.example.ztpaispring.entity.Pricing;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface PassRepository extends JpaRepository<Pass, UUID> {
}

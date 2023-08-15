package com.example.ztpaispring.repository;

import com.example.ztpaispring.entity.Activity;
import com.example.ztpaispring.entity.Pricing;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface PricingRepository extends JpaRepository<Pricing, UUID> {


}

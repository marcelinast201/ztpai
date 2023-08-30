package com.example.ztpaispring.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.UUID;


@Entity
@Table(name = "pricings",schema = "public")
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class Pricing {
    @Id
    @GeneratedValue
    @Column(name = "id_pricing")
    private UUID id;

    @Column(name = "pass_name")
    private String passName;

    @Column(name = "price")
    private Float price;

    @Column(name = "term")
    private Integer term;
    @OneToMany(mappedBy = "pricing")
    private List<Pass> passes;

}

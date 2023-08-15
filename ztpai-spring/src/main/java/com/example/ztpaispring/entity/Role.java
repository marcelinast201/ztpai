package com.example.ztpaispring.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.UUID;

@Entity
@Table(name = "role")
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Role {
    @Id
    @GeneratedValue
    @Column(name = "id_role")
    private UUID id;
    @Column(name = "role")
    private String role;


}

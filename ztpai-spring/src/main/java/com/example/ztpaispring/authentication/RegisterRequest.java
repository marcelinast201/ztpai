package com.example.ztpaispring.authentication;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;
import java.util.UUID;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequest {

    private UUID id;
    private String name;
    private String surname;
    private String email;
    private String password;
    private String phone;
    private UUID user_detail_id;
    private UUID user_role_id;
}

package com.example.ztpaispring.repository;

import com.example.ztpaispring.DTO.UserDTO;
import com.example.ztpaispring.entity.User;
import com.example.ztpaispring.entity.UserDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;
@Repository
public interface UserDetailsRepository  extends JpaRepository<UserDetail, UUID> {

}

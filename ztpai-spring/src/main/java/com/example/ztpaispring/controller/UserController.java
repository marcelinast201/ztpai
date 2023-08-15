package com.example.ztpaispring.controller;


import com.example.ztpaispring.DTO.UserDTO;
import com.example.ztpaispring.entity.User;
import com.example.ztpaispring.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/users")
public class UserController {
    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }


    @GetMapping("/allDetails/{userId}")
    public ResponseEntity<UserDTO> getUserDTOById(@PathVariable UUID userId) {
        UserDTO userDTO = userService.getUserDTOById(userId);
        if (userDTO != null) {
            return ResponseEntity.ok(userDTO);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/{userId}")
    public ResponseEntity<User> getUserById(@PathVariable UUID userId) {
        User user = userService.getUserById(userId);
        if (user != null) {
            return new ResponseEntity<>(user, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    @PostMapping("/{userId}/edit")
    public User editUser(@PathVariable UUID userId,@RequestBody User user){
        return userService.editUser(user);
    }

    @DeleteMapping("/delete/{userId}")
    public void deleteUser(@PathVariable UUID userId){
        userService.deleteUser(userId);
    }



}

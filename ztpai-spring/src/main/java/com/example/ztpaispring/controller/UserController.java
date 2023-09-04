package com.example.ztpaispring.controller;


import com.example.ztpaispring.DTO.UserDTO;
import com.example.ztpaispring.entity.Activity;
import com.example.ztpaispring.entity.User;
import com.example.ztpaispring.exception.UserAlreadyRegisteredException;
import com.example.ztpaispring.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/users")
public class UserController {
    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> users = userService.getAllUsers();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

//    @GetMapping("/userdtos")
//    public ResponseEntity<List<UserDTO>> getAllUserDTOs() {
//        List<UserDTO> userDTOs = userService.getAllUserDTOs();
//        return new ResponseEntity<>(userDTOs, HttpStatus.OK);
//    }
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
    public User editUser(@PathVariable UUID userId, @RequestBody User user) {
        return userService.editUser(user);
    }

    @PostMapping("/{userId}/assignActivity")
    public ResponseEntity<String> assignUserToActivity(@PathVariable UUID userId, @RequestBody String activityId) {
        try {
            userService.assignUserToActivity(userId, UUID.fromString(activityId));

            return ResponseEntity.ok("User assigned to activity successfully");
        } catch (UserAlreadyRegisteredException ex) {
            return ResponseEntity.badRequest().body(ex.getMessage());
        }
    }

    @GetMapping("/{userId}/activities")
    public ResponseEntity<List<Activity>> getUserAssignedActivities(@PathVariable UUID userId) {
        List<Activity> activities = userService.getUserAssignedActivities(userId);
        return ResponseEntity.ok(activities);
    }
    @PostMapping("/{userId}/removeActivity")
    public ResponseEntity<String> removeUserFromActivity(@PathVariable UUID userId, @RequestBody String activityId) {
        userService.removeActivityFromUser(userId,UUID.fromString(activityId));
        return ResponseEntity.ok("Activity removed from user");
    }
    @DeleteMapping("/delete/{userId}")
    public void deleteUser(@PathVariable UUID userId) {
        userService.deleteUser(userId);
    }


}

package com.example.ztpaispring.service;

import com.example.ztpaispring.DTO.UserDTO;
import com.example.ztpaispring.entity.Activity;
import com.example.ztpaispring.entity.Pass;
import com.example.ztpaispring.entity.User;
import com.example.ztpaispring.entity.UserDetail;
import com.example.ztpaispring.repository.ActivityRepository;
import com.example.ztpaispring.repository.PassRepository;
import com.example.ztpaispring.repository.UserRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class UserService {
    public static final String USER_NOT_FOUND = "User with given email not found.";
    public static final String EMAIL_ALREADY_EXISTS = "User with this email already exists";
    private final UserRepository userRepository;
    private final ActivityRepository activityRepository;
    private final PassRepository passRepository;


    @Autowired
    public UserService(UserRepository userRepository, ActivityRepository activityRepository, PassRepository passRepository) {
        this.userRepository = userRepository;
        this.activityRepository = activityRepository;
        this.passRepository = passRepository;
    }

    public List<Activity> getUserAssignedActivities(UUID userId) {
        User user = userRepository.findById(userId).orElseThrow(() -> new EntityNotFoundException("User not found"));
        return user.getUsersActivity();
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User getUserById(UUID userId) {
        return userRepository.findById(userId).orElse(null);
    }

    public User editUser(User user) {
        User editUser = userRepository.findById(user.getId()).orElseThrow();
        editUser.setEmail(user.getEmail());
        editUser.setPassword(user.getPassword());

        UserDetail userDetails = editUser.getUserDetail();
        userDetails.setPhone(userDetails.getPhone());
        userDetails.setName(userDetails.getName());
        userDetails.setSurname(userDetails.getSurname());


        return userRepository.save(editUser);
    }
    public void assignUserToActivity(UUID userId, UUID activityId) {
        User user = userRepository.findById(userId).orElseThrow(() -> new EntityNotFoundException("User not found"));
        Activity activity = activityRepository.findById(activityId).orElseThrow(() -> new EntityNotFoundException("Activity not found"));
        user.checkUserRegistration(activity);
        user.getUsersActivity().add(activity);
        userRepository.save(user);
    }
    public void removeActivityFromUser(UUID userId, UUID activityId) {
        User user = userRepository.findById(userId).orElseThrow(() -> new EntityNotFoundException("User not found"));
        Activity activity = activityRepository.findById(activityId).orElseThrow(() -> new EntityNotFoundException("Activity not found"));

        user.getUsersActivity().remove(activity);
        userRepository.save(user);
    }


    public UserDTO getUserDTOById(UUID userId) {
        User user = userRepository.findById(userId).orElse(null);
        if (user != null) {
            return convertUserToUserDTO(user);
        }
        return null;
    }
    public void deleteUser(UUID userId) {
        userRepository.deleteById(userId);
    }

    public UserDTO convertUserToUserDTO(User user) {
        return new UserDTO(
                user.getId(),
                user.getEmail(),
                user.getUserDetail().getName(),
                user.getUserDetail().getSurname(),
                user.getUserDetail().getPhone());
    }



}

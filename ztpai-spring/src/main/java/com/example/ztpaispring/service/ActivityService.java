package com.example.ztpaispring.service;

import com.example.ztpaispring.entity.Activity;
import com.example.ztpaispring.entity.User;
import com.example.ztpaispring.repository.ActivityRepository;
import com.example.ztpaispring.repository.UserRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;


@Service
public class ActivityService {

    private final ActivityRepository activityRepository;
    private final UserRepository userRepository;


    @Autowired
    public ActivityService(ActivityRepository activityRepository, UserRepository userRepository) {
        this.activityRepository = activityRepository;
        this.userRepository = userRepository;
    }

    public List<Activity> getAllActivities() {
        return activityRepository.findAll();
    }

    public Activity getActivityById(UUID activityId) {
        return activityRepository.findById(activityId).orElse(null);
    }
    public Activity createNewActivity(Activity activity) {
     return activityRepository.save( activity);
    }

    public List<Activity> getActivitiesByCategory(String category) {
        return activityRepository.findByCategory(category);
    }


    public void deleteActivity(UUID activityId) {
        activityRepository.deleteById(activityId);
    }
}



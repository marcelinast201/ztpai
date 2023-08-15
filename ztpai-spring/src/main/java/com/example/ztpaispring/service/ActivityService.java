package com.example.ztpaispring.service;

import com.example.ztpaispring.entity.Activity;
import com.example.ztpaispring.repository.ActivityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;


@Service
public class ActivityService {

    private final ActivityRepository activityRepository;

    @Autowired
    public ActivityService(ActivityRepository activityRepository) {
        this.activityRepository = activityRepository;
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

}



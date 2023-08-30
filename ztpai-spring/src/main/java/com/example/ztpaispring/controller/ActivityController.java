package com.example.ztpaispring.controller;

import com.example.ztpaispring.entity.Activity;
import com.example.ztpaispring.service.ActivityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/activities")
public class ActivityController {

    private final ActivityService activityService;

    @Autowired
    public ActivityController(ActivityService activityService) {
        this.activityService = activityService;
    }


    @GetMapping
    public ResponseEntity<List<Activity>> getAllActivities() {
        List<Activity> activities = activityService.getAllActivities();
        return new ResponseEntity<>(activities, HttpStatus.OK);
    }


    @GetMapping("/category/{category}")
    public ResponseEntity<List<Activity>> getActivitiesByCategory(@PathVariable String category) {
        List<Activity> activities = activityService.getActivitiesByCategory(category);
        if (activities.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(activities, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Activity> getActivitylById(@PathVariable("id") UUID id) {
        Activity activity = activityService.getActivityById(id);
        if (activity != null) {
            return new ResponseEntity<>(activity, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/createActivity")
    public ResponseEntity<Activity> createActivity(@RequestBody Activity activity) {
        Activity addActivity= activityService.createNewActivity(activity);
        return new ResponseEntity<>(addActivity, HttpStatus.CREATED);
    }
//    @PostMapping("/{userId}/assign")
//    public ResponseEntity<String> assignUserToActivity(@PathVariable UUID userId, @RequestBody String activityId) {
//        activityService.assignUserToActivity(userId, UUID.fromString(activityId));
//        return ResponseEntity.ok("User assigned to activity successfully");
//    }

    @DeleteMapping("/delete/{activityId}")
    public void deleteActivity(@PathVariable UUID activityId){
        activityService.deleteActivity(activityId);
    }

}
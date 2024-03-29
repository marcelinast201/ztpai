package com.example.ztpaispring.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.UUID;


@Entity
@Table(name = "activity",schema = "public")
@Getter
@AllArgsConstructor
@NoArgsConstructor

public class Activity {

    @Id
    @GeneratedValue
    @Column(name = "id_activity")
    private UUID id;
    @Column(name = "name")
    private String name;
    @Column(name = "day")
    private String day;
    @Column(name = "hour")
    private String hour;
    @Column(name = "availability")
    private String availability;
    @Column(name = "category")
    private String category;



    @ManyToMany(mappedBy = "usersActivity")
    @JsonManagedReference
    @JsonIgnore
    List<User> activityUsers;


}

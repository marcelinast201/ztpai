package com.example.ztpaispring.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.Cascade;

import java.util.UUID;
@Entity
@Getter
@Setter

@AllArgsConstructor
@NoArgsConstructor
@Table(name = "user_detail",schema = "public")
public class UserDetail {
    @Id
    @GeneratedValue
    @Column(name = "id_user_detail")
    private UUID id_user_details;

    @Column(name="name")
    private String name;

    @Column(name = "surname")
    private String surname;

//    @Column(name = "username")
//    private String username;

    @Column(name = "phone")
    private String phone;


    @JsonIgnore
    @Cascade(org.hibernate.annotations.CascadeType.ALL)
    @OneToOne(mappedBy = "userDetail")
    private User user;
}

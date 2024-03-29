package com.example.ztpaispring.entity;

import com.example.ztpaispring.exception.UserAlreadyRegisteredException;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;
import java.util.UUID;

@Entity
@Table(name = "userr",schema = "public")
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class User implements UserDetails {
    @Id
    @GeneratedValue
    @Column(name = "id_user")
    private UUID id;

    @Column(name = "email")
    private String email;

    @Column(name = "password")
    private String password;

    @JsonIgnore
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "id_user_detail", referencedColumnName = "id_user_detail")
    private UserDetail userDetail;

    @JsonIgnore
    @ManyToOne()
    @JoinColumn(name = "id_role")
    private Role userRole;
    @JsonIgnore
    @OneToMany(mappedBy = "userPass")
    private List<Pass> passes;


    @ManyToMany(cascade = CascadeType.ALL)
    @JsonManagedReference
    @JsonIgnore
    @JoinTable(
            name = "workout_activity",
            joinColumns = @JoinColumn(name = "id_user"),
            inverseJoinColumns = @JoinColumn(name = "id_activity")
    )
    private List<Activity> usersActivity;


    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority(userRole.getRole()));
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    public void checkUserRegistration(Activity activity) {
        if (usersActivity.contains(activity)) {
            throw new UserAlreadyRegisteredException("You are already assigned in these classes");
        }
    }
}
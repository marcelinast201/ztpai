package com.example.ztpaispring.service;
import com.example.ztpaispring.authentication.AuthenticationRequest;
import com.example.ztpaispring.authentication.AuthenticationResponse;
import com.example.ztpaispring.authentication.RegisterRequest;
import com.example.ztpaispring.entity.Role;
import com.example.ztpaispring.entity.User;
import com.example.ztpaispring.entity.UserDetail;
import com.example.ztpaispring.repository.RoleRepository;
import com.example.ztpaispring.repository.UserRepository;
import com.example.ztpaispring.service.JwtService;
import com.example.ztpaispring.exception.UserNotFoundException;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;

import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final UserRepository userRepository;


    private final RoleRepository roleRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;


    @Transactional
    public  ResponseEntity<AuthenticationResponse> register(RegisterRequest request) {
        String email = request.getEmail();

        AuthenticationResponse authenticationResponse;
        Role defaultRole = roleRepository.findByRole("user");
        UserDetail userDetail = new UserDetail();
        userDetail.setName(request.getName());
        userDetail.setSurname(request.getSurname());
        userDetail.setPhone(request.getPhone());


        if(userRepository.findByEmail(email).isPresent()) {
            authenticationResponse = AuthenticationResponse.builder()
                    .token("")
                    .id(null)
                    .message("Email taken!")
                    .build();
            return ResponseEntity.status(HttpStatus.CONFLICT).body(authenticationResponse);
        }


        var user = User.builder()
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .userRole(defaultRole)

                .userDetail(userDetail)
                .build();

        userRepository.save(user);
        var jwtToken = jwtService.generateToken(user);
        authenticationResponse = AuthenticationResponse.builder()
                .token(jwtToken)
                .id(user.getId())
                .message("User registered successfully")
                .build();

        return ResponseEntity.status(HttpStatus.OK).body(authenticationResponse);
    }


    public ResponseEntity<AuthenticationResponse> authenticate(AuthenticationRequest request) {
        AuthenticationResponse authenticationResponse;

        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            request.getEmail(),
                            request.getPassword()
                    )
            );
        } catch (AuthenticationException e) {
            authenticationResponse = AuthenticationResponse.builder()
                    .token("")
                    .id(null)
                    .message("Invalid email or password!")
                    .build();
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(authenticationResponse);
        }

        User user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new UserNotFoundException("User does not exist"));
        Role roles = user.getUserRole();
        String jwtToken = jwtService.generateToken(user);
        authenticationResponse = AuthenticationResponse.builder()
                .token(jwtToken)
                .id(user.getId())
                .role(roles.getRole())
                .message("User signed in successfully")
                .build();

        return ResponseEntity.status(HttpStatus.OK).body(authenticationResponse);
    }


}
package com.example.ztpaispring;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@EnableJpaRepositories(value = "com.example.ztpaispring")
@SpringBootApplication()
public class ZtpaiSpringApplication {

    public static void main(String[] args) {
        SpringApplication.run(ZtpaiSpringApplication.class, args);
    }

}

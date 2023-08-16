package com.example.ztpaispring.DTO;

import java.util.Objects;
import java.util.UUID;

public class UserDTO {
    private UUID id;
    private String email;
    private String name;
    private String surname;

    //private String password;
    //private String roleName;
    private String phoneNumber;

    public UserDTO(UUID id, String email, String name, String surname, String phoneNumber) {
        this.id = id;
        this.email = email;
        this.name = name;
        this.surname = surname;
        this.phoneNumber = phoneNumber;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        UserDTO userDTO = (UserDTO) o;
        return Objects.equals(id, userDTO.id) && Objects.equals(name, userDTO.name) && Objects.equals(surname, userDTO.surname) && Objects.equals(email, userDTO.email) && Objects.equals(phoneNumber, userDTO.phoneNumber);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, surname, email, phoneNumber);
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }
}

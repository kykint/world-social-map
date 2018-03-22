package com.netcracer.worldsocialmap.database.domain;

import lombok.Getter;
import lombok.Setter;
import org.springframework.security.crypto.bcrypt.BCrypt;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.UUID;

@Entity
@Table(name = "usr")
public class User {

    public User() {
    }

    public User(String email, String password, String surName, String name, String patronimyc, String birthDate, String city) {
        this.email = email;
        this.surName = surName;
        this.name = name;
        this.patronimyc = patronimyc;
        this.birthDate = birthDate;
        this.city = city;
        this.salt = BCrypt.gensalt();
        this.password = BCrypt.hashpw(password, this.salt);
    }

    @Id
    @Column(name = "user_id")
    @GeneratedValue
    @Getter @Setter private UUID id;

    @Column(name = "email")
    @Getter @Setter private String email;

    @Column(name = "password")
    @Getter @Setter private String password;

    @Column(name = "surname")
    @Getter @Setter private String surName;

    @Column(name = "name")
    @Getter @Setter private String name;

    @Column(name = "patronimyc")
    @Getter @Setter private String patronimyc;

    @Column(name = "birthdate")
    @Getter @Setter private String birthDate;

    @Column(name = "city")
    @Getter @Setter private String city;

    @Column(name = "salt")
    @Getter @Setter private String salt;
}

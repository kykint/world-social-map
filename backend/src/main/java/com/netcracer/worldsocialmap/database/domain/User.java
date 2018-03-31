package com.netcracer.worldsocialmap.database.domain;


import lombok.Getter;
import lombok.Setter;

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


    @Id
    @Column(name = "user_id")
    @GeneratedValue
    @Getter
    @Setter
    private UUID id;

    @Column(name = "email")
    @Getter
    @Setter
    private String email;

    @Column(name = "password")
    @Getter
    @Setter
    private String password;

    @Column(name = "surname")
    @Getter
    @Setter
    private String surName;

    @Column(name = "name")
    @Getter
    @Setter
    private String name;

    @Column(name = "patronimyc")
    @Getter
    @Setter
    private String patronimyc;

    @Column(name = "birthdate")
    @Getter
    @Setter
    private String birthDate;

    @Column(name = "city")
    @Getter
    @Setter
    private String city;

    @Column(name = "salt")
    @Getter
    @Setter
    private String salt;
}

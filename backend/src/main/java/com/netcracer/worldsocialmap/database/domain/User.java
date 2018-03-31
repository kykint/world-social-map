package com.netcracer.worldsocialmap.database.domain;


import lombok.Data;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.UUID;

@Entity
@Table(name = "usr")
@Data
public class User {

    public User() {
    }


    @Id
    @Column(name = "user_id")
    @GeneratedValue
    private UUID id;

    @Column(name = "email")
    private String email;

    @Column(name = "password")
    private String password;

    @Column(name = "surname")
    private String surName;

    @Column(name = "name")
    private String name;

    @Column(name = "patronimyc")
    private String patronimyc;

    @Column(name = "birthdate")
    private String birthDate;

    @Column(name = "city")
    private String city;

    @Column(name = "salt")
    private String salt;
}

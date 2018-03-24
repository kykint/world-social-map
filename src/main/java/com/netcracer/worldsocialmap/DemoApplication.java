package com.netcracer.worldsocialmap;

import com.netcracer.worldsocialmap.database.dao.UserDaoImpl;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.w3c.dom.UserDataHandler;

@SpringBootApplication
public class DemoApplication {

    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
//        UserDaoImpl user = new UserDaoImpl();
//        user.createUser("aa", "a", "a", "aa", "aa", "a", "aa");

    }
}

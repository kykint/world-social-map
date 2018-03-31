package com.netcracer.worldsocialmap.controller;

import com.netcracer.worldsocialmap.database.dao.UserDao;
import com.netcracer.worldsocialmap.database.dao.UserDaoImpl;
import com.netcracer.worldsocialmap.database.domain.User;
import com.netcracer.worldsocialmap.database.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.sql.SQLException;
import java.util.UUID;

@RestController
@RequestMapping("user")
public class UserController {

//    @Autowired
    UserRepository userRepository;

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<User> getAirport() {
        UserDao user = new UserDaoImpl();

//        User airport = userRepository.findOne(UUID.fromString("761e1cf4-4d90-4e35-8149-2200e4263f93"));
//        System.out.println(airport.getId());
//        if (airport ==
//                null) {
//            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//        }
        return new ResponseEntity<>(user.getUserByEmail("hhd"), HttpStatus.OK);
    }
}

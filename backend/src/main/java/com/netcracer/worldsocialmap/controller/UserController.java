package com.netcracer.worldsocialmap.controller;


import com.netcracer.worldsocialmap.database.dao.UserDaoImpl;
import com.netcracer.worldsocialmap.database.domain.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("user")
@CrossOrigin
public class UserController {

    @Autowired
    UserDaoImpl userDao;

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<User> getAirport() {
        return new ResponseEntity<>(userDao.getUserByEmail("hhd"), HttpStatus.OK);
    }
}

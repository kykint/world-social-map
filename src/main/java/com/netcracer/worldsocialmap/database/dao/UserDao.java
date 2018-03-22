package com.netcracer.worldsocialmap.database.dao;

import com.netcracer.worldsocialmap.database.domain.User;

import java.util.List;
import java.util.UUID;

public interface UserDao {

    public void saveUser(User user);

    public void deleteUser(UUID id);

    public User getUserById(UUID id);

    public User getUserByEmail(String email);

    public List<User> listUser();

    public boolean existUser(UUID id);

}

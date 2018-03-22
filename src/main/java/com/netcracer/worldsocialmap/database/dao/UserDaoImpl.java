package com.netcracer.worldsocialmap.database.dao;

import com.netcracer.worldsocialmap.database.domain.User;
import com.netcracer.worldsocialmap.database.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class UserDaoImpl implements UserDao {

    private UserRepository userRepository;

    @Autowired
    public UserDaoImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public void saveUser(User user) {
        this.userRepository.save(user);
    }

    @Override
    public void deleteUser(UUID id) {
        this.userRepository.deleteById(id);
    }

    @Override
    public User getUserById(UUID id) {
        Optional<User> user = this.userRepository.findById(id);
        return user.orElse(null);
    }

    @Override
    public User getUserByEmail(String email) {
        List<User> users = listUser();
        for (User user : users) {
            if ((user.getEmail().equals(email))) {
                return user;
            }
        }
        return null;
    }

    @Override
    public List<User> listUser() {
        List<User> users = new ArrayList<>();
        this.userRepository.findAll().forEach(users::add);
        return users;
    }


    @Override
    public boolean existUser(UUID id) {
        return userRepository.existsById(id);
    }

}

package com.netcraker.worldsocialmap.database.dao;

import com.netcraker.worldsocialmap.database.domain.User;
import com.netcraker.worldsocialmap.database.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
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
        this.userRepository.delete(id);
    }

    @Override
    public User getUserById(UUID id) {
        return userRepository.findOne(id);
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
        userRepository.findAll().forEach(users::add);
        return users;
    }


    @Override
    public boolean existUser(UUID id) {
        return userRepository.exists(id);
    }

    @Override
    public User createUser(String email, String surname, String name, String patronimyc, String birthday, String city, String password) {
        User user = new User();
        user.setEmail(email);
        user.setSurName(surname);
        user.setName(name);
        user.setPatronimyc(patronimyc);
        user.setBirthDate(birthday);
        user.setCity(city);
        String salt = BCrypt.gensalt();
        user.setSalt(salt);
        user.setPassword(BCrypt.hashpw(password, salt));
        userRepository.save(user);
        return user;
    }

}

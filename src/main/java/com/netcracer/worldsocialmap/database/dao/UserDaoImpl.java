package com.netcracer.worldsocialmap.database.dao;

import com.netcracer.worldsocialmap.database.domain.User;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;
import java.util.UUID;

@Repository
@Transactional
public class UserDaoImpl implements UserDao {

    @Autowired
    private SessionFactory sessionFactory;

    private Session getSession() {
        return sessionFactory.getCurrentSession();
    }

    @Override
    public User createUser(String email, String surname, String name, String patronimyc, String birthday, String city, String password) {
        User user = new User();
        user.setBirthDate(birthday);
        user.setCity(city);
        user.setEmail(email);
        user.setName(name);
        user.setPatronimyc(patronimyc);
        user.setSurName(surname);
        String salt = BCrypt.gensalt();
        user.setSalt(salt);
        user.setPassword(BCrypt.hashpw(password, salt));
        saveUser(user);
        return user;
    }

    @Override
    public void saveUser(User user) {
        getSession().save(user);
    }

    @Override
    public void deleteUser(UUID id) {
        Session session = getSession();
        session.delete(session.load(User.class, id));
    }

    @Override
    public User getUserById(UUID id) {
        return getSession().get(User.class, id);
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

    @SuppressWarnings("unchecked")
    @Override
    public List<User> listUser() {
        return getSession().createQuery("from User").list();
    }


    @Override
    public boolean existUser(UUID id) {
        return getSession().get(User.class, id) != null;
    }

}

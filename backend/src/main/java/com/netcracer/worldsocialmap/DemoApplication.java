package com.netcracer.worldsocialmap;

import com.netcracer.worldsocialmap.database.dao.UserDaoImpl;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.data.jpa.JpaRepositoriesAutoConfiguration;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.w3c.dom.UserDataHandler;

//@SpringBootApplication
//public class DemoApplication {
//
//    public static void main(String[] args) {
//        SpringApplication.run(DemoApplication.class, args);
////        UserDaoImpl user = new UserDaoImpl();
////        user.createUser("aa", "a", "a", "aa", "aa", "a", "aa");
//
//    }
//}

@SpringBootApplication(scanBasePackages = {"com.netcracer.worldsocialmap"} , exclude = JpaRepositoriesAutoConfiguration.class)
@EnableTransactionManagement
public class DemoApplication extends SpringBootServletInitializer {
    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }

    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
        return application.sources(DemoApplication.class);
    }
}
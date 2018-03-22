//package com.netcracer.worldsocialmap;
//
//import org.apache.commons.dbcp.BasicDataSource;
//import org.hibernate.SessionFactory;
//import org.hibernate.cfg.Environment;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.ComponentScan;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.context.annotation.PropertySource;
//import org.springframework.dao.annotation.PersistenceExceptionTranslationPostProcessor;
//import org.springframework.orm.hibernate4.HibernateTransactionManager;
//import org.springframework.orm.hibernate4.LocalSessionFactoryBean;
//import org.springframework.transaction.annotation.EnableTransactionManagement;
//
//
//import javax.sql.DataSource;
//import java.util.Properties;
//
//@Configuration
//@EnableTransactionManagement
//@PropertySource({ "classpath:persistence-postgresql.properties" })
//@ComponentScan({ "com.netcracer.worldsocialmap" })
//public class PersistanceConfig {
//
//    @Autowired
//    private Environment env;
//
//    @Bean
//    public LocalSessionFactoryBean sessionFactory() {
//        LocalSessionFactoryBean sessionFactory = new LocalSessionFactoryBean();
//        sessionFactory.setDataSource(dataSource());
//        sessionFactory.setPackagesToScan(
//                new String[] { "com.netcracer.worldsocialmap" });
//        sessionFactory.setHibernateProperties(hibernateProperties());
//
//        return sessionFactory;
//    }
//
//    @Bean
//    DataSource dataSource() {
//        BasicDataSource dataSourceConfig = new BasicDataSource();
//        dataSourceConfig.setDriverClassName("org.postgresql.Driver");
//        dataSourceConfig.setUrl("jdbc:postgresql://127.0.0.1:5432/databasename");
//        dataSourceConfig.setUsername("");
//        dataSourceConfig.setValidationQuery("SELECT 1");
//        dataSourceConfig.setPassword("password");
//        return dataSourceConfig;
//    }
//
//    @Bean
//    @Autowired
//    public HibernateTransactionManager transactionManager(
//            SessionFactory sessionFactory) {
//
//        HibernateTransactionManager txManager
//                = new HibernateTransactionManager();
//        txManager.setSessionFactory(sessionFactory);
//
//        return txManager;
//    }
//
//    @Bean
//    public PersistenceExceptionTranslationPostProcessor exceptionTranslation() {
//        return new PersistenceExceptionTranslationPostProcessor();
//    }
//
//    Properties hibernateProperties() {
//        return new Properties() {
//            {
//                setProperty("hibernate.hbm2ddl.auto",
//                        env.getProperty("hibernate.hbm2ddl.auto"));
//                setProperty("hibernate.dialect",
//                        env.getProperty("hibernate.dialect"));
//                setProperty("hibernate.globally_quoted_identifiers",
//                        "true");
//            }
//        };
//    }
//}
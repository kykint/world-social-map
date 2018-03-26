package com.netcracer.worldsocialmap.database;

import org.apache.commons.dbcp.BasicDataSource;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.orm.hibernate5.HibernateTransactionManager;
import org.springframework.orm.hibernate5.LocalSessionFactoryBean;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import javax.sql.DataSource;
import java.util.Properties;


@Configuration
@EnableTransactionManagement
@PropertySource("classpath:db.properties")
public class DBConfiguration {
    @Value("${db.driver}")
    private String DRIVER;
    @Value("${db.password}")
    private String PASSWORD;
    @Value("${db.url}")
    private String URL;
    @Value("${db.username}")
    private String USERNAME;
    @Value("${hibernate.dialect}")
    private String DIALECT;
    @Value("${hibernate.show_sql}")
    private String SHOW_SQL;
    @Value("${hibernate.hbm2ddl.auto}")
    private String HBM2DDL_AUTO;
    @Value("${entitymanager.packagesToScan}")
    private String PACKAGES_TO_SCAN;

    @Bean
    DataSource dataSource() {
        BasicDataSource dataSourceConfig = new BasicDataSource();
        dataSourceConfig.setDriverClassName("org.postgresql.Driver");
        dataSourceConfig.setUrl("jdbc:postgresql://127.0.0.1:5432/worldsocialdb");
        dataSourceConfig.setUsername("postgres");
        dataSourceConfig.setValidationQuery("SELECT 1");
        dataSourceConfig.setPassword("lovejava");
        return dataSourceConfig;
    }

    @Bean
    public LocalSessionFactoryBean sessionFactory() {
        LocalSessionFactoryBean sessionFactory = new LocalSessionFactoryBean();
        sessionFactory.setDataSource(dataSource());
        sessionFactory.setPackagesToScan(PACKAGES_TO_SCAN);
        Properties hibernateProperties = new Properties();
        hibernateProperties.put("hibernate.dialect", DIALECT);
        hibernateProperties.put("hibernate.show_sql", SHOW_SQL);
        hibernateProperties.put("hibernate.hbm2ddl.auto", HBM2DDL_AUTO);
        sessionFactory.setHibernateProperties(hibernateProperties);
        return sessionFactory;
    }

    @Bean
    public HibernateTransactionManager transactionManager() {
        HibernateTransactionManager transactionManager = new HibernateTransactionManager();
        transactionManager.setSessionFactory(sessionFactory().getObject());
        return transactionManager;
    }
}
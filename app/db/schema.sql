DROP DATABASE IF EXISTS eatReadWatch_db;
CREATE DATABASE eatReadWatch_db;
USE eatReadWatch_db;

DROP TABLE IF EXISTS eat;
CREATE TABLE eat (
    id INT(10) NOT NULL AUTO_INCREMENT,
    restaurant_name VARCHAR(100) NOT NULL,
    eaten BOOLEAN NOT NULL default 0,
    PRIMARY KEY (id)
);
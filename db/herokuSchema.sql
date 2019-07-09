CREATE DATABASE `qkgd01is4tbz4mr5` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci */;

USE `qkgd01is4tbz4mr5`;

CREATE TABLE user_info
(
    id INT
    AUTO_INCREMENT NOT NULL,
    username VARCHAR
    (30),
    password VARCHAR
    (45),
    name VARCHAR
    (45),
    score INT
    (10),
    meditationvid VARCHAR(300),
    exercisevid VARCHAR(300),
    PRIMARY KEY
    (id)
);

CREATE TABLE data_output
(
    id INT
    AUTO_INCREMENT NOT NULL,
    category VARCHAR
    (45),
    min INT (10),
    max INT (10),
    meditation VARCHAR
    (45),
    exercise VARCHAR
    (45),
    description VARCHAR
    (300),

    PRIMARY KEY
        (id)
);
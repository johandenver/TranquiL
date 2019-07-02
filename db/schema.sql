DROP DATABASE IF EXISTS tranquil_db;


CREATE DATABASE tranquil_db;

USE tranquil_db;

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
    video_meditation VARCHAR(300),
    video_exercises VARCHAR(300),
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
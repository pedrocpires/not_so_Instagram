create database if not exists not_so_instagram;
use not_so_instagram;

CREATE TABLE if not exists user (
    id INT AUTO_INCREMENT,
    name VARCHAR(192),
    PRIMARY KEY (id)
);

INSERT INTO user VALUES (null, 'Pedro Pires');
INSERT INTO user VALUES (null, 'Viniciu Ravelli');
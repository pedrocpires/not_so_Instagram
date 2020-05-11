create database IF not exists not_so_instagram;
use not_so_instagram;

CREATE TABLE if not exists user (
    id INT AUTO_INCREMENT NOT NULL UNIQUE,
    fullname VARCHAR(192) NOT NULL,
    email VARCHAR(192) NOT NULL UNIQUE,
    username VARCHAR(40) NOT NULL UNIQUE,
    password VARCHAR(192) NOT NULL,
    photo_profile VARCHAR(192),
    biography VARCHAR(150),
    createdAt DATETIME,
    updatedAt DATETIME,
    PRIMARY KEY (id)    
);

CREATE TABLE if not exists post (
    id INT AUTO_INCREMENT NOT NULL UNIQUE,
    image_post VARCHAR(192) NOT NULL UNIQUE,
    likes INT NOT NULL,
    caption VARCHAR(150),
    id_user INT NOT NULL,
    createdAt DATETIME,
    updatedAt DATETIME,
    FOREIGN KEY (id_user) REFERENCES user(id),
    PRIMARY KEY (id)    
);

CREATE TABLE if not exists comment (
    id INT AUTO_INCREMENT NOT NULL UNIQUE,
	comment VARCHAR(150) NOT NULL,
    likes INT NOT NULL,
	id_user INT NOT NULL,
	id_post INT NOT NULL,
    createdAt DATETIME,
    updatedAt DATETIME,
    FOREIGN KEY (id_user) REFERENCES user(id),
    FOREIGN KEY (id_post) REFERENCES post(id),
    PRIMARY KEY (id)
);

CREATE TABLE if not exists post_like (
    id INT AUTO_INCREMENT NOT NULL UNIQUE,
	id_post INT NOT NULL,
    id_user INT NOT NULL,
    createdAt DATETIME,
    updatedAt DATETIME,
    FOREIGN KEY (id_post) REFERENCES post(id),
    FOREIGN KEY (id_user) REFERENCES user(id),
    PRIMARY KEY (id)
);

CREATE TABLE if not exists follow (
    id INT AUTO_INCREMENT NOT NULL UNIQUE,
	id_user INT NOT NULL,
    id_follower INT NOT NULL,
    createdAt DATETIME,
    updatedAt DATETIME,
    FOREIGN KEY (id_user) REFERENCES user(id),
    FOREIGN KEY (id_follower) REFERENCES user(id),
    PRIMARY KEY (id)
);


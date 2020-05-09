create database if not exists not_so_instagram;
use not_so_instagram;

CREATE TABLE if not exists user (
    id INT AUTO_INCREMENT NOT NULL UNIQUE,
    fullname VARCHAR(192) NOT NULL,
    email VARCHAR(192) NOT NULL UNIQUE,
    username VARCHAR(40) NOT NULL UNIQUE,
    password VARCHAR(192) NOT NULL,
    photo_profile VARCHAR(192),
    biography VARCHAR(150),
    created_at DATETIME,
    updated_at DATETIME,
    PRIMARY KEY (id)    
);

CREATE TABLE if not exists post (
    id INT AUTO_INCREMENT NOT NULL UNIQUE,
    image_post VARCHAR(192),
    likes INT NOT NULL,
    id_user INT NOT NULL,
    created_at DATETIME,
    updated_at DATETIME,
    FOREIGN KEY (id_user) REFERENCES user(id),
    PRIMARY KEY (id)    
);

ALTER TABLE post
MODIFY image_post VARCHAR(192) NOT NULL UNIQUE;

ALTER TABLE post
CHANGE created_at createdAt DATETIME;

ALTER TABLE post
CHANGE updated_at updatedAt DATETIME;

ALTER TABLE post
ADD caption VARCHAR(150);

ALTER TABLE post
MODIFY caption VARCHAR(150)
AFTER likes;

CREATE TABLE if not exists comment (
    id INT AUTO_INCREMENT NOT NULL UNIQUE,
	comment VARCHAR(150) NOT NULL,
	id_user INT NOT NULL,
	id_post INT NOT NULL,
    created_at DATETIME,
    updated_at DATETIME,
    FOREIGN KEY (id_user) REFERENCES user(id),
    FOREIGN KEY (id_post) REFERENCES post(id),
    PRIMARY KEY (id)
);

ALTER TABLE comment 
ADD likes INT NOT NULL AFTER comment;

ALTER TABLE comment
CHANGE created_at createdAt DATETIME;

ALTER TABLE comment
CHANGE updated_at updatedAt DATETIME;
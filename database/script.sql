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
    create_at DATETIME,
    update_at DATETIME,
    PRIMARY KEY (id)    
);

INSERT INTO user VALUES(
    null,
    'Pedro Pires',
    'pedro@email.com',
    'pedro',
    'senha1234',
    null,
    null,
    '2020-04-21',
    null
);

INSERT INTO user VALUES(
    null,
    'Viniciu Ravelli',
    'vinicius@email.com',
    'vinicius',
    'senha1234',
    null,
    null,
    '2020-04-21',
    null
);

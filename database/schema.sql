
CREATE DATABASE IF NOT EXISTS burgers_db;
USE burgers_db;

CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(255) NOT NULL,
    createdAt TIMESTAMP NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);


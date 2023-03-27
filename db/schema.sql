DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;
USE employees_db;

CREATE TABLE departments (
    id INT NOT NULL PRIMARY KEY,
    dept_name VARCHAR(30) NOT NULL
);

CREATE TABLE roles (
    id INT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    dept_id INT,
    FOREIGN KEY (dept_id)
    REFERENCES departments(id)
);

CREATE TABLE managers (
    id INT PRIMARY KEY,
    dept_id INT,
    full_name VARCHAR(30) NOT NULL,
    FOREIGN KEY (dept_id)
    REFERENCES departments(id)
);

CREATE TABLE employees (
    id INT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT,
    manager_id INT,
    FOREIGN KEY (role_id)
    REFERENCES roles(id)
);

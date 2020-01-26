CREATE DATABASE employee_tracker_DB;

USE employee_tracker_DB;

CREATE TABLE department(
	department_id INTEGER AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL  
);

CREATE TABLE role(
    role_id INTEGER AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INTEGER,
    CONSTRAINT department_id FOREIGN KEY (department_id)
    REFERENCES department(department_id)
);

CREATE TABLE employee(
	employee_id INTEGER AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER NOT NULL,
    manager_id INTEGER NOT NULL,
    CONSTRAINT role_id FOREIGN KEY (role_id)
    REFERENCES role(role_id),
	CONSTRAINT manager_id FOREIGN KEY (role_id)
    REFERENCES role(role_id)   
    );
    

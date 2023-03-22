INSERT INTO departments (dept_name)
VALUES ("Sales"),
       ("Engineering"),
       ("Legal"),
       ("Human Resources"),
       ("Accounting");
       
INSERT INTO roles (id, title, salary, dept_id)
VALUES (1, 'Sales Manager', 80000, 1),
       (2, 'Sales Team Member', 65000, 1),
       (3, 'Engineering Manager', 85000, 2),
       (4, 'Engineering Team Member', 75000, 2),
       (5, 'Head of Legal Team', 100000, 3),
       (6, 'Legal Team Member', 85000, 3),
       (7, 'Human Resources Lead', 90000, 4),
       (8, 'Lead Acountant', 95000, 5);

INSERT INTO managers (id, dept_id, full_name)
VALUES (1, 1, 'James Baxter'),
       (2, 2, 'Sterling Archer'),
       (3, 3, 'Dave Tipper'),

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ('George', 'Yung', 2, 1),
       ('Pablo', 'Escobar', 4, 2), 
       ('James', 'Dean', 6, 3),
       ('Sandy', 'Squirrel', 7, 1),
       ('Eliza', 'Thornberry', 8, 3);
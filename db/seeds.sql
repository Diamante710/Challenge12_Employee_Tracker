
INSERT INTO departments (dept_name)
VALUES ("Sales"),
       ("Engineering"),
       ("Legal"),
       ("Human Resources"),
       ("Accounting");
       
INSERT INTO roles (title, salary, dept_id)
VALUES ('Sales Manager', 80000, 1),
       ('Sales Team Member', 65000, 1),
       ('Engineering Manager', 85000, 2),
       ('Engineering Team Member', 75000, 2),
       ('Head of Legal Team', 100000, 3),
       ('Legal Team Member', 85000, 3),
       ('Human Resources Lead', 90000, 4),
       ('Lead Acountant', 95000, 5);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ('James', 'Baxter', 1, NULL),
       ('Sterling', 'Archer', 2, 1),
       ('Eliza', 'Thornberry', 3, NULL),
       ('Dave', 'Tipper', 4, 3),
       ('Gucci', 'Mane', 5, NULL),
       ('Tom', 'Cruise', 6, 5),
       ('Saiyan', 'Goku', 7, NULL),
       ('Tim', 'Allen', 8, NULL);

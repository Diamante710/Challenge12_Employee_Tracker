const inquirer = require('inquirer');
const mysql = require('mysql2')
const table = require('console.table');
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: false }));

const connection = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Celeste20!6',
        database: 'employees_db'
    },
    console.log(`Connection Successful.`)
);

function run() {
    inquirer.prompt([
        {
            name: 'action',
            type: 'list',
            message: 'What would you like to do?',
            choices: [
                "View all employees",
                "Add an employee",
                "Update employee role",
                "View all managers",
                "Add manager",
                "View all roles",
                "Add role",
                "View all departments",
                "Add department",
                "Quit"
            ],
        },
    ])
        .then(response => {
            switch (response.action) {
                case 'View all employees':
                    viewEmployees();
                    break;
                case 'Add an employee':
                    addEmployee();
                    break;
                case 'Update employee role':
                    updateEmployee();
                    break;
                case 'View all managers':
                    viewManagers();
                    break;
                case 'View all roles':
                    viewRoles();
                    break;
                case 'Add role':
                    addRole();
                    break;
                case 'View all departments':
                    viewDepartment();
                    break;
                case 'Add a department':
                    addDepartment();
                    break;
                case "Quit":
                    connection.end();
                    break;
                default:
                    connection.end();
            }
        })
};

function viewEmployees() {
    connection.query(
        'SELECT * FROM employees',
        function (err, res) {
            if (err) throw err;
            console.table(res),
                run();
        })
};

function addEmployee() {
    inquirer.prompt([
        {
            name: 'firstName',
            type: 'input',
            message: 'Enter new employees first name.'
        },
        {
            name: 'lastName',
            type: 'input',
            message: 'Enter new employees last name.',
        },
        {
            name: 'roleId',
            type: 'list',
            message: 'Select role ID for new employee.',
            choices: [
                '1 (Sales Manager)',
                '2 (Sales Team Member)',
                '3 (Engineering Manager)',
                '4 (Engineering Team Member)',
                '5 (Head of Legal Team)',
                '6 (Legal Team Member)',
                '7 (Human Resources Lead)',
                '8 (Lead Acountant)',
            ],
        },
        {
            name: 'managerId',
            type: 'list',
            message: 'Select manager ID for new employee.',
            choices: [
                '1 (James Baxter)',
                '2 (Sterling Archer)',
                '3 (Dave Tipper)',
            ],
        },
    ])
        .then(answer => {
            connection.query(
                'INSERT INTO (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)',
                [answer.firstName, answer.lastName, answer.roleId, answer.managerId],
                function (err, res) {
                    if (err) throw err;
                    console.table(res),
                        run();
                })
        });
};

function updateEmployee() {
    inquirer.prompt([
        {
            name: 'id',
            type: 'input',
            message: 'Enter employee id',
        },
        {
            name: 'roleId',
            type: 'input',
            message: 'Enter new role id',
        },
    ])
        .then(answer => {
            connection.query(
                'UPDATE employees SET job_id=? WHERE id=?',
                [answer.roleId, answer.id],
                function (err, res) {
                    if (err) throw err;
                    console.table(res);
                    run();
                })
        })
};

function viewManagers() {
    connection.query(
        'SELECT * FROM managers',
        function (err, res) {
            if (err) throw err;
            console.table(res),
                run();
        })
};

function viewRoles() {
    connection.query(
        'SELECT * FROM roles',
        function (err, res) {
            if (err) throw err;
            console.table(res),
                run();
        })
};

function addRole() {
    inquirer.prompt([
        {
            name: 'title',
            type: 'input',
            message: 'What is the roles title?',
        },
        {
            name: 'salary',
            type: 'input',
            message: 'What is the salary for this job?',
        },
        {
            name: 'deptId',
            type: 'input',
            message: 'What is the department ID number?',
        },
    ])
        .then(answer => {
            connection.query(
                'INSERT INTO roles (title, salary, dept_id) VALUES (?, ?, ?)',
                [answer.roleId, answer.salary, answer.deptId],
                function (err, res) {
                    if (err) throw err;
                    console.table(res);
                    run();
                }
            );
        });
};

function viewDepartment() {
    connection.query(
        'SELECT * FROM departments',
        function (err, res) {
            if (err) throw err;
            console.table(res),
                run();
        })
};

function addDepartment() {
    inquirer.prompt([
        {
            name: 'deptName',
            type: 'input',
            message: 'What is the name of the department?',
        },
    ])
        .then(answer => {
            connection.query(
                'INSERT INTO departments (dept_name) VALUES (?)',
                [answer.deptName],
                function (err, res) {
                    if (err) throw err;
                    console.table(res);
                    run();
                }
            );
        });
};

run();
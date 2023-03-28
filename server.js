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
        database: 'employees_db',
        port: 3306
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
                "View all roles",
                "Add role",
                "View all departments",
                "Add a new department",
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
                case 'View all roles':
                    viewRoles();
                    break;
                case 'Add role':
                    addRole();
                    break;
                case 'View all departments':
                    viewDepartment();
                    break;
                case 'Add a new department':
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
            console.table(res)
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
            choices: [{
                name: '(Sales Manager)',
                value: 1
            },
            {
                name: '(Sales Team Member)',
                value: 2
            },
            {
                name: '(Engineering Manager)',
                value: 3
            },
            {
                name: '(Engineering Team Member)',
                value: 4
            },
            {
                name: '(Head of Legal Team)',
                value: 5
            },
            {
                name: '(Legal Team Member)',
                value: 6
            },
            {
                name: '(Human Resources Lead)',
                value: 7
            },
            {
                name: '(Lead Acountant)',
                value: 8
            },
            ],
        },
        {
            name: 'managerId',
            type: 'list',
            message: 'Select manager ID for new employee.',
            choices: [
                {
                    name: '(James Baxter)',
                    value: 1
                },
                {
                    name: '(Eliza Thornberry)',
                    value: 2
                },
                {
                    name: '(Gucci Mane)',
                    value: 3
                }
            ],
        },
    ])
        .then(answer => {
            connection.query(
                'INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)',
                [answer.firstName, answer.lastName, answer.roleId, answer.managerId],
                function (err) {
                    if (err) throw err;
                        viewEmployees();
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
                'UPDATE employees SET role_id=? WHERE id=?',
                [answer.roleId, answer.id],
                function (err) {
                    if (err) throw err;
                    viewEmployees();
                })
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
    ])
        .then(answer => {
            connection.query(
                'INSERT INTO roles (title, salary) VALUES (?, ?)',
                [answer.title, answer.salary],
                function (err) {
                    if (err) throw err;
                    viewRoles();
                }
            );
        });
};

function viewDepartment() {
    connection.query(
        'SELECT * FROM departments',
        function (err, res) {
            if (err) throw err;
            console.table(res)
                run();
        })
};

function addDepartment() {
    inquirer.prompt([
        {
            name: 'name',
            type: 'input',
            message: 'What is the name of new department?',
        },
    ])
        .then(answer => {
            connection.query(
                'INSERT INTO departments (dept_name) VALUES (?)',
                [answer.name],
                function (err) {
                    if (err) throw err;
                    viewDepartment();
                }
            );
        });
};

run();
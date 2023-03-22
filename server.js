const inquirer = require('inquirer');
const fs = require('fs');
const mysql = require('mysql2')


function run() {
    inquirer
        .prompt([
            {
                name: 'actions',
                type: 'list',
                message: 'What would you like to do?',
                choices: [
                    "View All Employees",
                    "Add Employee",
                    "Update Employee Role",
                    "View All Managers",
                    "Add Manager",
                    "View All Roles",
                    "Add Role",
                    "View All Departments",
                    "Add Department",
                    "Quit"
                ],
            },
        ])
        }

// make some switch functions?




run();
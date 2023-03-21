const inquirer = require('inquirer');
const fs = require('fs');


function run() {
    inquirer
        .prompt([
            {
                name: 'questions',
                type: 'list',
                message: 'What would you like to do?',
                choices: [
                    "View All Employees",
                    "Add Employee",
                    "Update Employee Role",
                    "View All Roles",
                    "Add Role",
                    "View All Departments",
                    "Add Department",
                    "Quit"
                ],
            },
        ])
        .then (({ })) => {

        }

        
}

run();
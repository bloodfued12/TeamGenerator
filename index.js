const Employee = require("./lib/Employee.js");
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

inquirer
.prompt([
    {
        type: 'input',
        message: "What's the employee's name?",
        name: "employeeName"
    },
    {
        type: 'input',
        message: "What's the employee's ID number?",
        name: "employeeId"
    },
    {
        type: 'input',
        message: "What's the employee's name?",
        name: "employeeName"
    },
    {
        type: 'input',
        message: "What's the employee's name?",
        name: "employeeName"
    },
    
])
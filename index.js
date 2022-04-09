const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require('inquirer');
const fs = require('fs');
const employees = [];
init = () =>{
    console.log("Answer the Following Prompts")
    return inquirer.prompt([
        {
            type: "input",
            message: "What is the name of the Manager?",
            name: "name"
        },
        {
            type: "input",
            message: "Enter Manager's ID",
            name: "managerID"
        },
        {
            type: "input",
            message: "Enter Manager's email",
            name: "managerEmail"
        },
        {
            type: "input",
            message: "Enter Manager's office number",
            name: "managerON"
        }

    ]).then((managerResults) => {
        managerResults.role = "Manager";
        const { name, id, email, officeNumber, role } = managerResults;
        const newManager = new Manager(name, id, email, officeNumber, role);
        employees.push(newManager);
        // addEmployee();
        console.log(managerResults);
        addEmployee();
    })
};

addEmployee = () => {
    return inquirer.prompt([
        {
            type: "list",
            message: "Would you like to add another member?",
            name: "add",
            choices:["Yes",
            "No"]
        }


    ]).then(choice =>{
        if(choice.add ==="Yes"){
            employeeType();
        }
        else {
            redernHTML();
        }
    })
}

employeeType = () => {
    return inquirer.prompt({
        type: "list",
            message: "What is the role of this employee?",
            name: "type",
            choices:["Engineer",
            "Intern"]
    }).then(choice =>{
        if(choice.type === 'Engineer'){
            addEngineer ();
        }
        else{
            addIntern();
        }
    })
};

addEngineer = () => {
    return inquirer.prompt([
        //question about Engineer
        {
            type: "input",
            message: "What is the Engineer's name?",
            name: "name"
        },
        {
            type: "input",
            message: "Engineer's employee ID:",
            name: "id"
        },
        {
            type: "input",
            message: "Engineer's email address:",
            name: "email"
        },
        {
            type: "input",
            message: "Engineer's github user name:",
            name: "github"
        }
    ]).then((engineerResults) => {
        engineerResults.role = "Engineer";
        const { name, id, email, github, role } = engineerResults;
        const newEngineer = new Engineer(name, id, email, github, role);
        employees.push(newEngineer);
        //ask if user wants to add another team member
        console.log(engineerResults);
        addEmployee();
    });
};

addIntern = () => {
    return inquirer.prompt([
        //question about Intern
        {
            type: "input",
            message: "What is the Intern's name?",
            name: "name"
        },
        {
            type: "input",
            message: "Intern's employee ID:",
            name: "id"
        },
        {
            type: "input",
            message: "Intern's email address:",
            name: "email"
        },
        {
            type: "input",
            message: "Intern's school:",
            name: "school"
        }
    ]).then((internResults) => {
        internResults.role = "Intern";
        const { name, id, email, school, role } = internResults;
        const newIntern = new Intern(name, id, email, school, role);
        employees.push(newIntern);
        //ask if user wants to add another team member
        addEmployee();
        console.log(internResults);
    });
};

init();
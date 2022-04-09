//Add all required files, and functions
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require('inquirer');
const fs = require('fs');
const render = require("./lib/Render");

//Set an array to keep track of all user input.
const employees = [];
//Initialize function, where it will ask user prompt.
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
            name: "id"
        },
        {
            type: "input",
            message: "Enter Manager's email",
            name: "email"
        },
        {
            type: "input",
            message: "Enter Manager's office number",
            name: "officeNumber"
        }

    ])
    //Take input for the manager, and saves it, then pushes into employees array.
    .then((managerInput) => {
        managerInput.role = "Manager";
        const { name, id, email, officeNumber, role } = managerInput;
        const newManager = new Manager(name, id, email, officeNumber, role);
        employees.push(newManager);
       //To make sure user input is indeed accurate.
        console.log(managerInput);
        //Ask user to add another employee.
        addEmployee();
    })
};
//Add employee. WIll ask yes or no question, depends on answer it will continue
//or start making html file for user.
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
            renderHtml();
        }
    })
}
//Ask user which type of employee: Intern, and Engineer, then will run appropriate functions
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
//For adding engineer
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
    ])
    //Same as manager
    .then((engineerInput) => {
        engineerInput.role = "Engineer";
        const { name, id, email, github, role } = engineerInput;
        const newEngineer = new Engineer(name, id, email, github, role);
        employees.push(newEngineer);
        //ask if user wants to add another team member
        console.log(engineerInput);
        addEmployee();
    });
};
//Ask for intern info
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
    ])
    //Same as above.
    .then((internInput) => {
        internInput.role = "Intern";
        const { name, id, email, school, role } = internInput;
        const newIntern = new Intern(name, id, email, school, role);
        employees.push(newIntern);
        //ask if user wants to add another team member
        console.log(internInput);
        addEmployee();
        
    });
};
//Function to create a file called newTeam.html
renderHtml = () => {
    const buildHTML = render(employees);
    fs.writeFile("newTeam.html", buildHTML, (err) => {
        if (err) {
            return console.log(err);
        } else {
            return console.log("Team HTML file has been created!")
        };
    })
};
//Starts code.
init();

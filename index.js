//linking the files to eachother
const inquirer = require("inquirer");
const fs = require("fs");
const style = require("./src/css");

const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const employeeArray = []; //empty array to put the team members

function startingPrompt(){
    inquirer.prompt([
        {
            message:"What is your team name:",
            name: "teamname"
        }
    ])

    .then(function(data){
        const teamName = data.teamname
        employeeArray.push(teamName)
        addManager();
    })
}

function addManager(){
    inquirer.prompt([
        {
            message: "Enter manager's name?",
            name: "name"
        },
        {
            message: "Enter manager's Email:",
            name:"email"
        },
        {
            type: "number",
            message: "Enter manager's office number:",
            name: "officeNumber"
        },
    ])

    .then(function(data){
        const name = data.name
        const id = 1
        const email = data.email
        const officeNumber = data.officeNumber     
        const teamMember = new Manager(name, id, email, officeNumber)
        employeeArray.push(teamMember)
        addTeamMembers();
    });

}
function addTeamMembers(){
    inquirer.prompt([
        {
            type: "list",
            message: "Add another member?",
            choices: ["Engineer", "Intern", "none"],
            name: "addMemberData"
        }
    ])

    .then(function(data){
        switch (data.addMemberData){
            case "Engineer":
                addEngineer();
                break;
            case "Intern":
                addIntern();
                break;
            case "none":
                compileTeam();
                break;
        }
    });
}

function addEngineer(){
    inquirer.prompt([
        {
            message: "What is this engineer's name?",
            name: "name"
        },
        {
            message: "What is this engineer's email address?",
            name: "email"
        },
        {
            message: "What is this engineer's Github profile?",
            name: "github" 
        }
    ])
    .then(function(data){
        const name = data.name
        const id = employeeArray.length + 1
        const email = data.email
        const github = data.github    
        const teamMember = new Engineer(name, id, email, github)
        employeeArray.push(teamMember)
        addTeamMembers()
    });

};
function addIntern(){
    inquirer.prompt([
        {
            message: "What is this intern's name?",
            name: "name"
        },
        {
            message: "What is this intern's email address?",
            name: "email"
        },
        {
            message: "What is this intern's school?",
            name: "school"
        }
    ])

        .then(function (data) {
            const name = data.name
            const id = employeeArray.length + 1
            const email = data.email
            const school = data.school
            const teamMember = new Intern(name, id, email, school)
            employeeArray.push(teamMember)
            addTeamMembers()
            
        });
};
function compileTeam() {
    console.log("//////////You've done it!!! Now give your team a raise.////////")

    const htmlArray = []
    const htmlBeginning = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>${employeeArray[0]}</title>
    <style>
     ${style}
    </style>
</head>
<body>
    <div class="banner-bar">
        <h1>${employeeArray[0]}</h1>
    </div>
    <div class="card-container">
    `
    htmlArray.push(htmlBeginning);

    for (let i = 1; i < employeeArray.length; i++) {
        let object = `
        <div class="member-card">
            <div class="card-top">
                <h2>${employeeArray[i].name}</h2>
                <h2>${employeeArray[i].role}</h2>
               
            </div>
            <div class="card-bottom">
                <p>Employee ID: ${employeeArray[i].id}</p>
                <p>Email: <a href="mailto:${employeeArray[i].email}">${employeeArray[i].email}</a></p>
        `
        if (employeeArray[i].officeNumber) {
            object += `
            <p>Phone Number:${employeeArray[i].officeNumber}</p>
            `
        }
        if (employeeArray[i].github) {
            object += `
            <p>GitHub: <a href="https://github.com/${employeeArray[i].github}">${employeeArray[i].github}</a></p>
            `
        }
        if (employeeArray[i].school) {
            object += `
            <p>School: ${employeeArray[i].school}</p>
            `
        }
        object += `
        </div>
        </div>
        `
        htmlArray.push(object)
    }

    const htmlEnd = `
    </div>
    </body>
    </html>
    `
    htmlArray.push(htmlEnd);

    fs.writeFile(`./dist/${employeeArray[0]}.html`, htmlArray.join(""), function (err) {
        
    })
}

startingPrompt()
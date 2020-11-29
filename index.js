const inquirer = require("inquirer");
const fs = require("fs");
const generateReadme = require("./generateReadme");


//  questions for user
const questions = [
    {
        type: "input",
        message: "What is your Project Title?",
        name: "title"
    },
    {
        type: "input",
        message: "Provide a detailed description of your project",
        name: "description"
    },
    {
        type: "input",
        message: "What are the steps required to install your project? Please provide a step-by-step description",
        name: "installation"
    },
    {
        type: "input",
        message: "Provide examples on how to run tests",
        name: "test"
    },
    {
        type: "input",
        message: "What license are you wanting to use?",
        name: "license"
    },
    {
        type: "input",
        message: "Input the license URL",
        name: "licenseURL"
    }, 
    {
        type: "input",
        message: "Enter the GitHub usernames of any contributors if any, if multiple contributors please separate usernames with a comma",
        name: "contributions"
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "githubUsername"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    },

];




// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, () =>{
        console.log("file written")
       
    })

}

// function to initialize program
function init(questions) {
    inquirer.prompt(questions)
        .then(answers => {
            console.log(answers);
            const readMe = generateReadme(answers);
            console.log(readMe)
            console.log(readMe.title)


            writeToFile("README.md",readMe)
        })

}

// function call to initialize program
init(questions);

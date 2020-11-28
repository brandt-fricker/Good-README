const inquirer = require("inquirer");

// array of questions for user
const questions = inquirer.prompt([
    {
        type: "input",
        message: "What would you like your title to be called?",
        name: "title"
    },
    {
        type: "input",
        message: "Give a brief description of your work",
        name: "description"
    },
    {
        type: "input",
        message: "What installation instructions are needed?",
        name: "installation"
    },
    {
        type: "input",
        message: "What usage information would you like displayed?",
        name: "usage"
    },
    {
        type: "input",
        message: "What are the contribution guidelines?",
        name: "contribution"
    },
    {
        type: "input",
        message: "What are the instructions for testing?",
        name: "test"
    },
    {
        //choose a license
        type: "input",
        message: "",
        name: ""
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "github-username"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    },

]);

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();

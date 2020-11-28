const inquirer = require("inquirer");

//  questions for user
const questions = inquirer.prompt([
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
        message: "Enter the GitHub usernames of any contributors if any, if multiple contributors please separate usernames with a comma",
        name: "contributions"
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
        type:"input",
        message:"Input the license URL",
        name:"licenseURL"
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
const gitTitle = questions.title;
const gitDescription = questions.description;
const gitInstallation = questions.installation;
const gitContributions = questions.contributions;
const gitTest = questions.test;
const gitLicense = questions.license;
const gitLicenseURL = questions.licenseURL;
const gitUsername = questions.github-username;
const gitEmail = questions.email;



// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();

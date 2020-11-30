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
        message: "How do you use your program?",
        name: "usage"

    },
    {
        type: "input",
        message: "Provide examples on how to run tests",
        name: "test"
    },
    {
        type: "list",
        message: "What license are you wanting to use?",
        choices: [
                    {name:"MIT",
                     value:"MIT",
                     short:"MIT"  },
                    {name:"Apache 2.0",
                     value:"Apache 2.0",
                     short:"Apache 2.0" },
                    {name:"GNU General Public License v3.0",
                     value:"GPLv3",
                     short:"GPLv3"}
                ],
        name: "license"
    },
    {
        type: "input",
        message: "Enter any contribution guidelines",
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

// function badgeSelection(license){
//     switch (license){
//         case "MIT":
//             return 'https://img.shields.io/badge/license-MIT-blue';
//         case "Apache 2.0":
//             return 'https://img.shields.io/badge/license-Apache%202.0-blue';
//         case "GPLv3":
//             return 'https://img.shields.io/badge/license-GPLv3-blue';
                  
//     }
// }



// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, () =>{
        console.log("Your README file has been created!")
       
    })

}

// function to initialize program
function init(questions) {
    inquirer.prompt(questions)
        .then(answers => {
            console.log(answers);
            const readMe = generateReadme(answers);
            console.log(readMe)
            // console.log(readMe.title)


            writeToFile("README.md",readMe)
        })
        

}

// function call to initialize program
init(questions);


// https://img.shields.io/badge/license-MIT-blue
// https://img.shields.io/badge/license-Apache%202.0-blue
// https://img.shields.io/badge/license-GPLv3-blue
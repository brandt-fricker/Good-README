function generateReadme(answers) {
    const {
        title,
        description,
        installation,
        contributions,
        usage,
        test,
        license,
        githubUsername,
        email,
    } = answers;

return `
# ${title}

![License:${license}](${badgeSelection(license)})

## Description

 ${description}

 ## Table of Contents
 
 - [Installation](#installation)
 - [Usage](#usage)
 - [Testing](#test)
 - [License](#license)
 - [Questions](#questions)


## Installation 

${installation}

## Usage

${usage}
            
## Testing 

${test}

## License

This project uses ${license}
            
## Questions
Find me on [GitHub](https://github.com/${githubUsername})
You can email with questions at [${email}](mailto:${email}) `
            

}
// function to display license badge of choice
function badgeSelection(license){
    switch (license){
        case "MIT":
            return 'https://img.shields.io/badge/license-MIT-blue';
        case "Apache 2.0":
            return 'https://img.shields.io/badge/license-Apache%202.0-blue';
        case "GPLv3":
            return 'https://img.shields.io/badge/license-GPLv3-blue';
        default:
            throw `unknown license: ${license}`  
                  
    }
}

module.exports = generateReadme;
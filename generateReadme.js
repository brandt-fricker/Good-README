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

### A Good README Generator in action!

![working app](gifs/trimmed.gif)

 ## Table of Contents
 
 - [Installation](#installation)
 - [Usage](#usage)
 - [Testing](#test)
 - [Contributors](#contributions)
 - [License](#license)
 - [Questions](#questions)


## Installation 

How to install in the terminal:

<pre>
<code>
${installation}
</code>
</pre>

## Usage

Run this command to run the application and create your README:

<pre>
<code>
${usage}
</code>
</pre>

## Testing 

${test}

## Contributions/Contributors

${contributions}

## License

This project uses ${license} license
            
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
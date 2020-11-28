function generateReadme(answers){
    const { 
        title, 
        description, 
        installation, 
        contributions,
        test,
        license,
        licenseURL,
        githubUsername,
        email,
    } = answers;
    
    return `title: ${ title },
            description: ${ description },
            installation: ${ contributions },
            test: ${ test },
            license: ${ license },
            licenseURL: ${ licenseURL },
            githubUsername: ${ githubUsername },
            email: ${ email }`
    
}

module.exports = generateReadme;
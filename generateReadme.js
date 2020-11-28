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
    return `title: ${ title }`
    
}

module.exports = generateReadme;
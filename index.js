// TODO: Include packages needed for this application
let inquirer = require('inquirer');
let fs = require('fs');
let util = require('util');

let writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
function promptUser() {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What is your project title?',
            name: 'title'
        },
        {
            type: 'input',
            message: 'Please describe your project',
            name: 'description'
        },
        {
            type: 'input',
            message: 'Tell users how to install your app',
            name: 'installation'
        },
        {
            type: 'input',
            message: 'How is this app used?',
            name: 'usage'
        },
        {
            type: 'checkbox',
            message: 'Tell us about the licenses for this project',
            choices: [
                'Apache',
                'MIT',
                'ISC',
                'GNU GPLv3'
            ],
            name: 'license'
        },
        {
            type: 'input',
            message: 'How do others contribute to this project?',
            name: 'contributing'
        },
        {
            type: 'input',
            message: 'Whose credit is this work?',
            name: 'credits'
        },
        {
            type: 'input',
            message: 'Test instructions',
            name: 'test'
        },
        {
            type: 'input',
            message: 'What is your github username?',
            name: 'username'
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email'
        },
    ]);
}
    
        
// TODO: Create a function to write README file
function generateMarkdown(response) {
    return `
# ${response.title}

# Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Test](#test)
- [Credits](#credits)
- [License](#license)
- [Questions](#questions)

## Description:
![License](https://img.shields.io/badge/License-${response.license}-blue.svg "License Badge")

    ${response.description}
## Installation:
    ${response.installation}
## Usage:
    ${response.usage}
## Contributing:
    ${response.contributing}
## Test: 
    ${response.test}
## Credits:
    ${response.credits}
## License:
    For more information about the License, click on the link below.

- [License](https://opensource.org/licenses/${response.license})

##  Questions:
    For questions about the Generator you can go to my 
    Github page at the following link:

- [Github Profile](https://github.com/${response.username})

For additional questions please reach out to me via email at: ${response.email}.
`
}
        
// // TODO: Create a function to initialize app
async function init() {
    try {
        const response = await promptUser();
        const readMe = generateMarkdown(response);

        await writeFileAsync('README.md', readMe);
        console.log('SUCCESS!');
    } catch(err) {
        console.log("SOMETHING WENT WRONG!", err);
    }
}

// // Function call to initialize app
init();

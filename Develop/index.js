// TODO: Include packages needed for this application
let inquirer = require('inquirer');
let fs = require('fs');
const { writeFile } = require('fs/promises');

// TODO: Create an array of questions for user input
inquirer
    .prompt([
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
            message: 'Please provide a table of contents',
            name: 'toc'
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
            type: 'list',
            message: 'Tell us about the licenses for this project',
            name: 'license'
        },
        {
            type: 'input',
            message: 'How do others contribute to this project?',
            name: 'contributions'
        },
        {
            type: 'input',
            message: 'Test instructions',
            name: 'test'
        },
        {
            type: 'input',
            message: 'What is your github URL?',
            name: 'questions'
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'questions'
        },
    ])

// TODO: Create a function to write README file
    .then((response) => {
        fs.writeFile('README.md', `# ${response.title}
        
        ## ${response.description}
        
        ## ${response.toc}
        
        ## ${response.installation}
        
        ## ${response.usage}
        
        ### ${response.license}
        
        ### ${response.contributions}
        
        ### ${response.test}
        
        ### ${response.questions}`)
    })

    

// // TODO: Create a function to initialize app
function init() {}

// // Function call to initialize app
init();

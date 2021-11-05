// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your name?',
        name: 'username'
    },
    {
        type: 'input',
        message: 'What is your applications name?',
        name: 'title'
    },
    {  
        type: 'input',
        message: 'Please decribe what your application does',
        name: 'description'
    },
    {
        type: 'input',
        message: 'What does the user need to install in order to run this application?',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'How can the user run the application?',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Where there any contributions made to your application?',
        name: 'contibutions',
        default: 'none'
    },
    {
        type: 'input',
        message: 'How can the user run tests for your application',
        name: 'tests'
    },
    {
        type: 'list',
        message: 'Which license is applicable?',
        choices: ["MIT", "Apache License 3.0", "GNU General Public License", "None"],
        name: 'license'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fileName = "README1.md"
    data = generateMarkdown(answers)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        fs.writeFileSync(writeToFile())
    })
    .then(() => {console.log("You successfully created a README!")})
    .catch((err)=> {console.log(err)})

}

// Function call to initialize app
init();

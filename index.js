//gets the node inquirer
var inquirer = require('inquirer');
inquirer
 .prompt([
    //pass questions here
    {
        type: 'input',
        name: 'user-name',
        message: 'What is your name?',
    },
    {  
    }
 ])
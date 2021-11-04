//gets the node inquirer
var inquirer = require('inquirer');
inquirer
 .prompt([
    //pass questions here
    {
        type: 'input',
        message: 'What is your name?',
        name: 'username'
    },
    {  
        type: 'input',
        message: 'Please decribe your application',
        name: 'description'
    }
 ])

//readme skeleton
const fs = require('fs'); 
const inquirer = require('inquirer');

const questions = () => {
    return inquirer.prompt([
        {
            name: 'title',
            message: 'What would you like the title to be for your application?',
        },
        {
            name: 'description',
            message: 'What description would you like to include?',
        },
        {
            name: 'installation',
            message: 'What installation instructions would you like to include?',
        },
        {
            name: 'usage',
            message: 'What usage instructions would you like to include?',
        },
        {
            name: 'license',
            message: 'What is the name of the license you wish to use?',
        },
        {
            name: 'contributing',
            message: 'Please add all contributors by their github username (seperated by a comma):',
        },
        {
            name: 'questionsEmail',
            message: 'Please add your email for the questions section of the README:',
        },
        {
            name: 'questionsGithub',
            message: 'Please add your github username for the questions section of the README:',
        }
    ])
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

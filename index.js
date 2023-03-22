const fs = require('fs'); 
const inquirer = require('inquirer');
const readmeMarkdown = require('./utils/generateMarkdown.js');

const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What would you like the title to be for your application?',
            validate: validateInput
        },
        {
            type: 'input',
            name: 'description',
            message: 'What description would you like to include?',
            validate: validateInput
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What installation instructions would you like to include?',
            validate: validateInput
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What usage instructions would you like to include?',
            validate: validateInput
        },
        {
            type: 'input',
            name: 'license',
            message: 'What is the name of the license you wish to use?',
            validate: validateInput
        },        
        {
            type: 'input',
            name: 'contributing',
            message: 'Please add all contributors by their github username (seperated by a comma):',
            validate: validateInput
        },
        {
            type: 'input',
            name: 'questionsEmail',
            message: 'Please add your email for the questions section of the README:',
            validate: validateInput
        },
        {
            type: 'input',
            name: 'questionsGithub',
            message: 'Please add your github username for the questions section of the README:',
            validate: validateInput
        }
    ])
};

const validateInput = async (input) => {
    if (input) {
        return true;
    } else {
        return 'You must enter the information.';
    }
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    questions().then(answers => {
        return readmeMarkdown(answers);
    }).then(data => {
        //return writeFile(data);
        console.log("data: " + data);
    }).catch(err => {
        console.log("err: " + err)
    });
}

// Function call to initialize app
init();

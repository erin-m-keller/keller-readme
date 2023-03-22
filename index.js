const fs = require('fs'); 
const inquirer = require('inquirer');

const questions = () => {
    return inquirer.prompt([
        {
            name: 'title',
            message: 'What would you like the title to be for your application?',
            validate: validateInput
        },
        {
            name: 'description',
            message: 'What description would you like to include?',
            validate: validateInput
        },
        {
            name: 'installation',
            message: 'What installation instructions would you like to include?',
            validate: validateInput
        },
        {
            name: 'usage',
            message: 'What usage instructions would you like to include?',
            validate: validateInput
        },
        {
            name: 'license',
            message: 'What is the name of the license you wish to use?',
            validate: validateInput
        },
        {
            name: 'contributing',
            message: 'Please add all contributors by their github username (seperated by a comma):',
            validate: validateInput
        },
        {
            name: 'questionsEmail',
            message: 'Please add your email for the questions section of the README:',
            validate: validateInput
        },
        {
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
        console.log('You must enter the information.');
        return false;
    }
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    questions().then(answers => {
        //return generatePage(answers);
        console.log("answers: " + answers);
    }).then(data => {
        //return writeFile(data);
        console.log("data: " + data);
    }).catch(err => {
        console.log("err: " + err)
    });
}

// Function call to initialize app
init();

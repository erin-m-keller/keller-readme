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
            type: 'list',
            name: 'license',
            message: 'What is the name of the license you wish to use?',
            choices: ["MIT","GPL","CC"],
            default: "MIT",
            validate: validateInput
        }, 
        {
            type: 'list',
            name: 'badgeColor',
            message: 'What color badge would you like?',
            choices: ["red","orange","yellow","green","blue","purple","black","white"],
            default: "blue",
            validate: validateInput
        },       
        {
            type: 'input',
            name: 'contributing',
            message: 'Please add all contributors by their github username (seperated by a comma):',
            validate: validateContributors
        },       
        {
            type: 'input',
            name: 'tests',
            message: 'Please add any tests for the application:',
            validate: validateInput
        },
        {
            type: 'input',
            name: 'questionsEmail',
            message: 'Please add your email for the questions section of the README:',
            validate: validateEmail
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

const validateContributors = async (input) => {
    let contributorRegex = /^[a-zA-Z0-9_-]+(?:\s*,\s*[a-zA-Z0-9_-]+)*$/;
    if (contributorRegex.test(input)) {
      return true;
    }
    return 'You must enter the usernames, separated by a comma.';
};

const validateEmail = async (input) => {
    let emailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
    if (emailRegex.test(input)) {
      return true;
    }
    return 'You must enter a valid email address.';
};

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log('README file generated successfully!');
        }
    });
}

function init() {
    questions().then(answers => {
        return readmeMarkdown(answers);
    }).then(data => {
        return writeToFile("GENERATED-README.md",data);
    }).catch(err => {
        console.log("Error: " + err)
    });
}

init();

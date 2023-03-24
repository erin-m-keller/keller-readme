// initialize variables
const fs = require('fs'),
      inquirer = require('inquirer'),
      readmeMarkdown = require('./utils/generateMarkdown.js');

// Create the prompts
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What would you like the title to be for your application?',
            validate: validateInput // validate the input is not empty
        },
        {
            type: 'input',
            name: 'description',
            message: 'What description would you like to include?',
            validate: validateInput // validate the input is not empty
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What installation instructions would you like to include?',
            validate: validateInput // validate the input is not empty
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What usage instructions would you like to include?',
            validate: validateInput // validate the input is not empty
        },
        {
            type: 'list',
            name: 'license',
            message: 'What is the name of the license you wish to use?',
            choices: ["MIT","GPL","CC"],
            default: "MIT",
            validate: validateInput // validate the input is not empty
        }, 
        {
            type: 'list',
            name: 'badgeColor',
            message: 'What color badge would you like?',
            choices: ["red","orange","yellow","green","blue","purple","black","white"],
            default: "blue",
            validate: validateInput // validate the input is not empty
        },       
        {
            type: 'input',
            name: 'contributing',
            message: 'Please add all contributors by their github username (seperated by a comma):',
            validate: validateContributors // validate the text is a comma delimited string
        },       
        {
            type: 'input',
            name: 'tests',
            message: 'Please add any tests for the application:',
            validate: validateInput // validate the input is not empty
        },
        {
            type: 'input',
            name: 'questionsEmail',
            message: 'Please add your email for the questions section of the README:',
            validate: validateEmail // validate the email is valid
        },
        {
            type: 'input',
            name: 'questionsGithub',
            message: 'Please add your github username for the questions section of the README:',
            validate: validateInput // validate the input is not empty
        }
    ])
};

/**
 * @validateInput
 * Ensures the input is not empty,
 * returns a message to the user if
 * it is
 */
const validateInput = async (input) => {
    // if input has data, return true
    if (input) {
        return true;
    } 
    // else display a message to the user
    return 'You must enter the information.';
};

/**
 * @validateContributors
 * Ensures the contributers string is
 * comma delimited 
 */
const validateContributors = async (input) => {
    // initialize variables
    let contributorRegex = /^[a-zA-Z0-9_-]+(?:\s*,\s*[a-zA-Z0-9_-]+)*$/;
    // if the string matches the regex pattern, return true
    if (contributorRegex.test(input)) {
      return true;
    }
    // else display a message to the user
    return 'You must enter the usernames, separated by a comma.';
};

/**
 * @validateEmail
 * Ensures a valid email has
 * been entered
 */
const validateEmail = async (input) => {
    // initialize variables
    let emailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
    // if the string matches the regex pattern, return true
    if (emailRegex.test(input)) {
      return true;
    }
    // else display a message to the user
    return 'You must enter a valid email address.';
};

/**
 * @validateEmail
 * Writes the README data to a file
 */
function writeToFile(fileName, data) {
    // write data to file
    fs.writeFile(fileName, data, (err) => {
        // if error, show error in console log
        if (err) {
            console.error(err);
        } 
        // console log a success message
        else {
            console.log('"GENERATED-README.md" file generated successfully! You can find your file in the root folder.');
        }
    });
}

/**
 * @init
 * Runs on app load
 */
function init() {
    // get the data from the prompts
    questions().then(answers => {
        // pass the answers to the markdown file to format the content
        return readmeMarkdown(answers);
    }).then(data => {
        // pass the returned data to the @writeToFile function
        return writeToFile("GENERATED-README.md",data);
    }).catch(err => {
        // console log the error
        console.log("Error: " + err)
    });
}

// initialize the application
init();
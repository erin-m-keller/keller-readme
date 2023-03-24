/**
 * @renderLicenseBadge
 * Returns a string with the license,
 * badge color, and link
 */
function renderLicenseBadge(userInput) {
  // initialize variables
  let appLicense = userInput.license,
      licenseColor = userInput.badgeColor;
  // if no input, return empty string
  if (!appLicense) {
    return "";
  } 
  // format the string and return to @generateMarkdown
  else {
    return `[![${appLicense} license](https://img.shields.io/badge/License-${appLicense}-${licenseColor}.svg)](${renderLicenseLink(appLicense)})`
  }
}

/**
 * @renderLicenseLink
 * Returns a string with the license link
 * to @renderLicenseBadge
 */
function renderLicenseLink(appLicense) {
  // switch the URL based on the license name. If no name, return empty string
  switch(appLicense) {
    case 'MIT':
      return 'https://lbesson.mit-license.org/';
    case 'GPL':
      return 'http://perso.crans.org/besson/LICENSE.html';
    case 'CC':
      return 'https://creativecommons.org/licenses/by-nd/4.0';
    default:
      return "";
  }
}

/**
 * @renderLicenseSection
 * Returns a string with the license section
 * to @generateMarkdown
 */
function renderLicenseSection(license) {
  // if no input, return empty string
  if (!license) {
    return "";
  } 
  // else, return the formatted string
  else {
    return `This project is covered under the ${license} license. To learn more, click the license at the top of this page.`
  }
}

/**
 * @renderContributingUsers
 * Splits the string and creates new
 * array to return to @generateMarkdown
 */
function renderContributingUsers (users) {
  // initialize variables
  let userArr = users.split(/,\s*/),
      newArr = [];
  // loop through the list of names
  for (let i = 0; i < userArr.length; i++) {
    // initialize variables
    // create user github string
    let userLink = `[${userArr[i]}](https://github.com/${userArr[i]})`
    // push to the newArr
    newArr.push(userLink);
  }
  // return newArr to @generateMarkdown
  return newArr;
}

/**
 * @renderUserEmail
 * creates email string to return to @generateMarkdown
 */
function renderUserEmail (email) {
  // initialize variables
  // create email string
  let emailStr = `[${email}](${email})`;
  // return string to @generateMarkdown
  return emailStr;
}

/**
 * @renderUserGithub
 * creates github user string to return to @generateMarkdown
 */
function renderUserGithub (github) {
  // initialize variables
  // create github string
  let githubUrl = `https://github.com/${github}`;
  // return string to @generateMarkdown
  return githubUrl;
}

/**
 * @generateMarkdown
 * Generates the README.md layout to write 
 * to a new file
 */
const generateMarkdown = data => {
  return `
  ${renderLicenseBadge(data)}

  # ${data.title}
  
  ## Description 
  ${data.description}
  
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation 
  ${data.installation}
  
  ## Usage 
  ${data.usage}
  
  ## License 
  ${renderLicenseSection(data.license)}
  
  ## Contributing 
  ${renderContributingUsers(data.contributing)}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  If you have any questions, please contact me directly at ${renderUserEmail(data.questionsEmail)}.  
  You can view more of my projects at ${renderUserGithub(data.questionsGithub)}.
  `;
};

module.exports = generateMarkdown;

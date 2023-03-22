function renderLicenseBadge(userInput) {
  let appLicense = userInput.license,
      licenseColor = userInput.badgeColor;
  if (!appLicense) {
    return "";
  } else {
    return `[![${appLicense} license](https://img.shields.io/badge/License-${appLicense}-${licenseColor}.svg)](${renderLicenseLink(appLicense)})`
  }
}

function renderLicenseLink(appLicense) {
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

function renderLicenseSection(license) {
  if (!license) {
    return "";
  } else {
    return `This project is covered under the ${license} license. To learn more, click the license at the top of this file.`
  }
}

function renderContributingUsers (users) {
  let userArr = users.split(/,\s*/),
      newArr = [];
  for (let i = 0; i < userArr.length; i++) {
    let userLink = `[${userArr[i]}](https://github.com/${userArr[i]})`
    newArr.push(userLink);
  }
  return newArr;
}

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
  If you have any questions about this projects, please contact me directly at ${data.questionsEmail}.  
  You can view more of my projects at https://github.com/${data.questionsGithub}.
  `;
};

module.exports = generateMarkdown;

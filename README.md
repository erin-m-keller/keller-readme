  # Readme Generator
  
  ## Description 
  This application was created with [Node.js](https://nodejs.org/en), [Node.js File System Module](https://www.w3schools.com/nodejs/nodejs_filesystem.asp), and [Inquirer](https://www.npmjs.com/package/inquirer). The application generates a README file based on user input.
  
  ## Table of Contents
  * [User Story](#user-story)
  * [Acceptance Criteria](#acceptance-criteria)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Generated File Example](#generated-file-example)
  * [License](#license)
  * [Contributors](#contributors)
  * [Outside Resources](#outside-resources)
  * [Tests](#tests)
  * [Questions](#questions)

  ## User Story
  ```md
  AS A developer
  I WANT a README generator
  SO THAT I can quickly create a professional README for a new project
  ```

  ## Acceptance Criteria
  ```md
  GIVEN a command-line application that accepts user input
  WHEN I am prompted for information about my application repository
  THEN a high-quality, professional README.md is generated with the title of my project  
  and sections entitled Description, Table of Contents, Installation, Usage, License,  
  Contributing, Tests, and Questions
  WHEN I enter my project title
  THEN this is displayed as the title of the README
  WHEN I enter a description, installation instructions, usage information, contribution  
  guidelines, and test instructions
  THEN this information is added to the sections of the README entitled Description, Installation,  
  Usage, Contributing, and Tests
  WHEN I choose a license for my application from a list of options
  THEN a badge for that license is added near the top of the README and a notice is added to the  
  section of the README entitled License that explains which license the application is  
  covered under
  WHEN I enter my GitHub username
  THEN this is added to the section of the README entitled Questions, with a link to my  
  GitHub profile
  WHEN I enter my email address
  THEN this is added to the section of the README entitled Questions, with instructions  
  on how to reach me with additional questions
  WHEN I click on the links in the Table of Contents
  THEN I am taken to the corresponding section of the README
  ```
  
  ## Installation 
  * Ensure you are running Node.js v16.  
  * Clone the repository.
  ```
    git clone git@github.com:erin-m-keller/keller-readme.git
  ```
  * Install the dependencies.
  ``` bash
    npm i
  ```
  * Start the application.
  ``` bash
    npm start
  ```
  > Answer the prompts to generate a README file.
  
  ## Usage 
  Video goes here.

  ## Generated File Example
  [Generated File](https://github.com/erin-m-keller/keller-readme/blob/main/GENERATED-README.md)
  
  ## License 
  [![MIT license](https://img.shields.io/badge/License-MIT-purple.svg)](https://lbesson.mit-license.org/)
  
  ## Contributors 
  [Erin Keller](https://github.com/erin-m-keller)

  ## Outside Resources

  * [ChatGPT](https://openai.com/blog/chatgpt): Used ChatGPT to generate the regex used within the application.
  
  ## Questions
  If you have any questions about this project, please contact me directly at [aestheticartist@gmail.com](aestheticartist@gmail.com).  
  You can view more of my projects [here](https://github.com/erin-m-keller).
  
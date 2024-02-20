const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: "input",
    name: "title",
    message: "Give your project a title:",
  },
  {
    type: "input",
    name: "description",
    message: "Describe the purpose of this project:",
  },
  {
    type: "input",
    name: "contents",
    message: "Write your project's table of contents here:",
  },
  {
    type: "input",
    name: "installation",
    message: "Describe the installation process for your project:",
  },
  {
    type: "input",
    name: "link",
    message: "Provide URL to deployed application:",
  },
  {
    type: "input",
    name: "usage",
    message: "Describe how to use your project:",
  },
  {
    type: "input",
    name: "features",
    message: "List your project's key features here:",
  },
  {
    type: "checkbox",
    name: "license",
    message: "Please select a license applicable to this project:",
    choices: [
      "APACHE 2.0",
      "GPL v3",
      "MIT",
      "BSD2",
      "BSD3",
      "Boost 1.0",
      "MPL 2.0",
      "none",
    ],
  },
  {
    type: "input",
    name: "contributing",
    message: "List any contributors:",
    default: "",
  },
  {
    type: "input",
    name: "test",
    message: "If relevant, give a walkthrough of the necessary tests:",
  },
  {
    type: "input",
    name: "creator",
    message: "Write your GitHub username:",
  },
  {
    type: "input",
    name: "email",
    message: "Provide a valid email address: ",
  },
];

// function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then((responses) => {
    console.log("Creating Professional README.md File...");
    writeToFile("./generated-readme/README.md", generateMarkdown({ ...responses }));
  });
}

// function call to initialize program
init();

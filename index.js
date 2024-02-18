const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: "input",
    name: "Title",
    message: "Give your project a title",
  },
  {
    type: "input",
    name: "Description",
    message: "Describe the purpose of this project.",
  },
  {
    type: "input",
    name: "Contents",
    message: "Write your project's table of contents here.",
  },
  {
    type: "input",
    name: "Installation",
    message: "Describe the installation process for your project.",
  },
  {
    type: "input",
    name: "Link",
    message: "Provide URL to deployed application."
  },
  {
    type: "input",
    name: "Usage",
    message: "Describe how to use your project.",
  },
  {
    type: "input",
    name: "Features",
    message: "List your project's key features here.",
  },
  {
    type: "checkbox",
    name: "License",
    message: "Please select a license applicable to this project.",
    choices: ["APACHE 2.0", "GPL v3", "MIT", "BSD2", "BSD3", "Boost 1.0", "MPL 2.0", "none"],
  },
  {
    type: "input",
    name: "Contributing",
    message: "List any contributors.",
    default: "",
  },
  {
    type: "input",
    name: "Test",
    message: "If relevant, give a walkthrough of the necessary tests.",
  },
  {
    type: "input",
    name: "Creator",
    message: "Write your GitHub username.",
  },
  {
    type: "input",
    name: "Email",
    message: "Provide a valid email address.",
  },
];

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {}

// function call to initialize program
init();

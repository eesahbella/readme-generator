// Creating a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![Github license](https://img.shields.io/badge/license-${license}-blue)`;
  }
  return "";
}
// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}
  ## Deployed Application URL
  ${data.link}
  ## Table of Contents
  * [Description](#description)
  * [Deployed Application URL](#DeployedApplicationURL)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Features](#features)
  * [Contributing](#contributing)
  * [Testing](#testing)
  * [Questions](#questions)
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Features
  ${data.features}
  ## Contributing
  ${data.contributing}
  ## Testing
  ${data.test}
  ## Questions
  Please send your questions [here](mailto:${data.email}) or visit [github/${
    data.creator
  }](https://github.com/${data.creator}).
`;
}

module.exports = generateMarkdown;

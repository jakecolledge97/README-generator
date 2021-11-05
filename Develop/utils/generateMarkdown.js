// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(!license){
    return ""
  }else if(license === "MIT"){
    return "![license:MIT](https://img.shields.io/badge/License-MIT-informational)"
  }else if(license === "Apache License 2.0"){
    return "![license:Apache 2.0](https://img.shields.io/badge/License-Apache%20License%202.0-yellow)"
  }else{
    return "![license:GNU](https://img.shields.io/badge/License-GNU-red)"
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(!license){
    return "*No license*"
  }else if(license === "MIT"){
    return "[MIT License]https://opensource.org/licenses/MIT"
  }else if(license === "Apache License 2.0"){
    return "[Apache License 2.0]https://www.apache.org/licenses/LICENSE-2.0"
  }else{
    return "[GNU General Public License]https://www.gnu.org/licenses/gpl-3.0.en.html"
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

# Table of Contents

- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [Contributors](#Contributors)
- [Tests](#Tests)
- [Licensing](#License)

## Descripton
${datadescription}

## Installation
${data.installation}

## Usage
${data.usage}

## Contributors 
${data.name}
${data.contributions}

## Tests
${data.tests}

## License
${renderLicenseBadge(data.license)}
`;
}

module.exports = generateMarkdown;

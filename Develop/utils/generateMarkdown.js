// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(!license){
    return ""
  }else if(license === "MIT"){
    return "https://img.shields.io/badge/License-MIT-informational"
  }else if(license === "Apache License 2.0"){
    return "https://img.shields.io/badge/License-Apache%20License%202.0-yellow"
  }else{
    return "https://img.shields.io/badge/License-GNU-red"
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(!license){
    return ""
  }else if(license === "MIT"){
    return "https://opensource.org/licenses/MIT"
  }else if(license === "Apache License 2.0"){
    return "https://www.apache.org/licenses/LICENSE-2.0"
  }else{
    return "https://www.gnu.org/licenses/gpl-3.0.en.html"
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

![license:${license}](${renderLicenseBadge})

# Table of Contents

- [Description](#Description)
- [Mockup](#Mockup)
- [Installation](#To-edit-this-projects-repository)
- [Licensing](#License)

## Descripton
${datadescription}

## Mockup
${data.screenshot}

##
`;
}

module.exports = generateMarkdown;

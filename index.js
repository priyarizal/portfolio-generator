const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your name?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'What do you live?',
            name: 'location',
        },
        {
            type: 'input',
            message: 'Tell us an interesting fact about you',
            name: 'facts,
        },
        {
            type: 'input',
            message: 'What is your Github URL?',
            name: 'GithubURL',
        },
        {
            type: 'input',
            message: 'What is your LinkedIn URL?',
            name: 'LinkedInURL',
        },
        {
            type:"input",
            message:"what is your favorite color",
            name:"color"
        }
    ])
    .then((response) => {
        //console.log(response);
        let responseReturn = JSON.stringify(response)
        fs.appendFileSync("index.html",responseReturn);
    });
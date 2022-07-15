const inquirer = require('inquirer');
const fs = require("fs");

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
            name: 'facts',
        },
        {
            type: 'input',
            message: 'What is your Github URL?',
            name: 'Github URL',
        },
        {
            type: 'input',
            message: 'What is your LinkedIn URL?',
            name: 'LinkedIn URL',
        }
    ])
    .then((response) => {
        console.log(response);
        let responseReturn = JSON.stringify(response)
        fs.appendFileSync("response.txt",responseReturn)
    });

    

  
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
            name: 'facts'
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
        }
    ])
    .then((response) => {
        //console.log(response);
        let responseReturn = JSON.stringify(response)
        
        fs.appendFileSync("index.html", ` 
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>doccc</title>
        </head>
        <body>
            ${responseReturn}
        </body>
        </html>
        `);
    });
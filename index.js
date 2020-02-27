// required node modules and js files
const fs = require("fs");
const inquirer = require("inquirer");
const axios = require("axios");
require("dotenv").config();

// Creates a series of command line prompt questions
inquirer
	.prompt([
		{
			type: "input",
			name: "name",
			message: "What is your Github username?"
		},
		{
			type: "input",
			name: "title",
			message: "What is the name of your project?"
		},
		{
			type: "input",
			name: "description",
			message: "Please provide a short description of your project"
		},
		{
			type: "input",
			name: "install",
			message: "What command should be run to install dependencies?"
		},
		{
			type: "input",
			name: "usage",
			message: "What is the usage of the project?"
		},
		{
			type: "input",
			name: "license",
			message: "What kind of license should your project have?"
		},
		{
			type: "input",
			name: "contributing",
			message:
				"What do users need to know about contributing to the repo?"
		},
		{
			type: "input",
			name: "test",
			message: "What command should be run to test?"
		}
	])
	.then(function(input) {
		// user answers stored in variables
		const name = input.name;
		const title = input.title;
		const description = input.description;
		const install = input.install;
		const usage = input.usage;
		const license = input.license;
		const contributing = input.contributing;
		const test = input.test;

		// Axios call for github API
		const queryUrl = `https://api.github.com/users/${name}?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`;
		axios
			.get(queryUrl)
			.then(function(result) {
				// stores the profile picture and email associated with the github profile.
				const userImage = result.data.avatar_url;
				const userEmail = result.data.email;

				const readMeContent = `# ${title}

## Table of Contents
[Description](#description)

[Installation](#installation)

[Usage](#usage)

[License](#license)

[Contributing](#contributing)

[Testing](#testing)

[Questions](#questions)

## Description
${description}

## Installation
${install}

## Usage
${usage}

## License
${license}

## Contributing
${contributing}

## Testing
${test}

## Questions
###### For questions, please contact me at ${userEmail}.

${userImage}`;

				fs.writeFile("read2.md", readMeContent, (err) => {
					if (err) {
						throw err;
					}
				});
			})
			// Notifies the user if they did not enter a valid github username.
			.catch((err) => {
				console.log(
					"User not found. Please enter a valid Github username."
				);
				process.exit(1);
			});
	});

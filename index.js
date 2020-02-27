// required node modules and js files
const fs = require("fs");
const inquirer = require("inquirer");
const axios = require("axios");
require("dotenv").config();

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
		const name = input.name;
		console.log(name);
	});

// .get(
//     `https://api.github.com/users/${username}?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`
// )
// .catch((err) => {
//     console.log(`User not found`);
//     process.exit(1);
// });

function writeToFile(fileName, data) {}

function init() {}

init();

// required node modules and js files
const fs = require("fs");
const inquirer = require("inquirer");
const api = require("./utils/api");
const generateMarkdown = require("./utils/generateMarkdown").default;

function promptUser() {
	return inquirer.prompt([
		{
			type: "input",
			name: "username",
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
			name: "license",
			message: "What kind of license should your project have?"
		},

		{
			type: "input",
			name: "install",
			message: "What command should be run to install dependencies?"
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
	]);
}

promptUser();

function writeToFile(fileName, data) {}

function init() {}

init();

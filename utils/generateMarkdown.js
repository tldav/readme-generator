function generateMarkdown(data) {
	return `

# ${data.title}

## Description
${data.description}

## Table of Contents

## Installation
${data.install}

## Usage
${data.usage}

## License
${data.license}

## Contributing
${data.contributing}

## Tests
${data.test}

## Questions



`;
}

module.exports = generateMarkdown;

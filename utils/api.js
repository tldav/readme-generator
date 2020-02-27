const axios = require("axios");

const api = {
	getUser(username) {
		const queryUrl = `https://api.github.com/users/${username}`;
		console.log(queryUrl);

		axios.get(queryUrl).then(function(result) {
			const user = result.data;
			console.log(user);
		});
	}
};

console.log(api);

module.exports = api;

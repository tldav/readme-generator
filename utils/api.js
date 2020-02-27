const axios = require("axios");
require("dotenv").config();

const api = {
	getUser(username) {
		return axios;
	}
};

console.log(api);

module.exports = api;

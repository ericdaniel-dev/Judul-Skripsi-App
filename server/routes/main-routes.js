const express = require('express');
const mainRouters = express.Router();

mainRouters.get('/', (request, response) => {
	response.json({message: 'hello world'});
})

module.exports = mainRouters;
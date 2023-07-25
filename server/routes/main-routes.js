const express = require('express');
const mainRouter = express.Router();

mainRouter.get('/', (request, response) => {
	response.json({message: 'hello world'});
})

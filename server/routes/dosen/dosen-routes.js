const express = require('express');
const connection = require('../../core/connection.js');
const filter = require('../../core/filter.js');
const dosenRouters = express.Router();


dosenRouters.get('/', (request, response) => {
	response.send('dosen Routers');
})
dosenRouters.get('/list', async (request, response) => {
	const dosenListQuery = "SELECT id, nama FROM dosen";
	await connection.query(dosenListQuery, (error, result) => {
		if(error){
			response.send(error);
		}
		else{
			response.json(result);
		}
	});
})
dosenRouters.get('/:id', async (request, response) => {
	const endpointID = request.params.id;
	if(!filter.onlyNumber(endpointID)){
		response.send("Accept numbers");
		return;
	}
	const dosenIdQuery = `SELECT id, nama from dosen where id=${endpointID}`;
	await connection.query(dosenIdQuery, (error, result) => {
		if(error){
			response.send(error);
		}
		else{
			response.json(result);
		}
	});
})
module.exports = dosenRouters;
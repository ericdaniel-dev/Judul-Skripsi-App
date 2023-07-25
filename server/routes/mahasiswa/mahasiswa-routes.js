const express = require('express');
const connection = require('../../core/connection.js');
const filter = require('../../core/filter.js');
const mahasiswaRouters = express.Router();

mahasiswaRouters.get('/', (request, response) => {
	response.send('mahasiswa Routers');
})

mahasiswaRouters.get('/list', async (request, response) => {
	const mahasiswaListQuery = "Select id, nama, program_studi, semester from mahasiswa";
	await connection.query(mahasiswaListQuery, (error, result) => {
		if(error){
			response.send(error);
		}
		else{
			response.json(result);
		}
	});
})
mahasiswaRouters.get('/:id', async (request, response) => {
	const endpointID = request.params.id;
	if(!filter.onlyNumber(endpointID)){
		response.send("Accept numbers");
		return;
	}
	const mahasiswaIdQuery = `SELECT id, nama from mahasiswa where id=${endpointID}`;
	await connection.query(mahasiswaIdQuery, (error, result) => {
		if(error){
			response.send(error);
		}
		else{
			response.json(result);
		}
	});
})

module.exports = mahasiswaRouters;
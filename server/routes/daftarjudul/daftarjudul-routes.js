const express = require('express');
const connection = require('../../core/connection.js');
const filter = require('../../core/filter.js');
const daftarjudulRouters = express.Router();


daftarjudulRouters.get('/', (request, response) => {
	response.send('daftar judul Routers');
})
daftarjudulRouters.get('/list', async (request, response) => {
	const daftarjudulListQuery = "SELECT * FROM daftarjudul";
	await connection.query(daftarjudulListQuery, (error, result) => {
		if(error){
			response.send(error);
		}
		else{
			response.json(result);
		}
	});
})
daftarjudulRouters.get('/:id', async (request, response) => {
	const endpointID = request.params.id;
	if(!filter.onlyNumber(endpointID)){
		response.send("Accept numbers");
		return;
	}
	const daftarjudulIdQuery = `SELECT id, judul from daftarjudul where id=${endpointID}`;
	await connection.query(daftarjudulIdQuery, (error, result) => {
		if(error){
			response.send(error);
		}
		else{
			response.json(result);
		}
	});
})
module.exports = daftarjudulRouters;
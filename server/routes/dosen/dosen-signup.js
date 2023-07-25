const express = require('express');
const dosenSignupRouters = express.Router();
const connection = require('../../core/connection.js');
const filter = require('../../core/filter.js');

dosenSignupRouters.get('/', (request, response) => {
	response.send('dosen signup Router');
})


dosenSignupRouters.post('/signup', async (request, response) => {
	const namaGet = request.body.nama;
	const userGet = request.body.user;
	const passGet = request.body.pass;
	const emailGet = request.body.email;
	if(filter.containSymbol(namaGet) || filter.containSymbol(userGet)
		|| filter.containSymbol(passGet) || !filter.validEmail()){
		response.json({error: "can't use symbol"});
		return;
	}
	const dosenSignupQuery = `INSERT INTO dosen(nama, user, pass, email) VALUES
	(${namaGet},${userGet}, ${passGet}, ${emailGet})`;
	await connection.query(dosenSignupQuery, (error, result) => {
		if(error){
			response.json(`{error: ${error}`);
			return;
		}
		if(result.length>0){
			response.json({status: 'sign up success'});
			return;
		}
		else{
			response.json({error: 'sign up fail'});
		}
	});
})

module.exports = dosenSignupRouters;
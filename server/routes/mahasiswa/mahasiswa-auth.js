const express = require('express');
const mahasiswaAuthRouters = express.Router();
const connection = require('../../core/connection.js');
const filter = require('../../core/filter.js');

mahasiswaAuthRouters.get('/', (request, response) => {
	response.send('auth for mahasiswa');
})
mahasiswaAuthRouters.post('/login', async (request, response) => {
	const userGet = request.body.user;
	const passGet = request.body.pass;
	if(filter.containSymbol(userGet) || filter.containSymbol(passGet)){
		response.json({error: "can't use symbol"});
		return;
	}
	const mahasiswaAuthQuery = `SELECT id, user from mahasiswa where user='${userGet}' and pass='${passGet}'`;
	await connection.query(mahasiswaAuthQuery, (error, result) => {
		if(error){
			response.json(error);
			return;
		}
		if(result.length>0){
			request.session.loggedIn = true;
			request.session.username = userGet;
			request.session.roles = 'mahasiswa';
			request.session.userid = result[0].id;
			request.session.cookie.expires = new Date(Date.now()+3600000);
			response.json({status: 'login success'});
			return;
		}
		else{
			response.json({error: 'not found'});
			return;
		}
	});
})
mahasiswaAuthRouters.get('/logout', (request, response) => {
	request.session.destroy((error)=>{
		if(error){
			response.send(error);
			return;
		}
		else{
			response.clearCookie('connect.sid');
			response.json({status: 'logout success'});
			return;
		}
	})
})
mahasiswaAuthRouters.get('/test', (request, response) => {
	response.json(request.session);
})
module.exports = mahasiswaAuthRouters;
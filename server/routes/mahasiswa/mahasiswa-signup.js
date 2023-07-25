const express = require('express');
const mahasiswaSignupRouters = express.Router();
const connection = require('../../core/connection.js');
const filter = require('../../core/filter.js');

mahasiswaSignupRouters.get('/', (request, response) => {
	response.send('mahasiswa signup Router');
})

mahasiswaSignupRouters.get('/signup/usercheck/:user', async (request, response) => {
	const userToCheck = request.params.user;
	const userToCheckQuery = `SELECT id, user from mahasiswa where user='${userToCheck}'`;
	await connection.query(userToCheckQuery, (error, result) => {
		if(error){
			response.json({error: error.message});
			return;
		}
		else{
			if(result.length>0){
				response.json({status: 'already in use', registered: true});
				return;
			}
			else{
				response.json({status: 'not used yet', registered: false});
				return;
			}
		}
	});
})
mahasiswaSignupRouters.get('/signup/emailcheck/:email', async (request, response) => {
	const emailToCheck = request.params.email;
	const emailToCheckQuery = `SELECT id, email from mahasiswa where email='${emailToCheck}'`;
	await connection.query(emailToCheckQuery, (error, result) => {
		if(error){
			response.json({error: error.message});
			return;
		}
		else{
			if(result.length>0){
				response.json({status: 'already in use', registered: true});
				return;
			}
			else{
				response.json({status: 'not used yet', registered: false});
				return;
			}
		}
	});
})

mahasiswaSignupRouters.post('/signup', async (request, response) => {
	const {nama, user, pass, email} = request.body;
	if(filter.containSymbol(nama) || filter.containSymbol(user)
		|| filter.containSymbol(pass) || !filter.validEmail(email)){
		response.json({error: "can't use symbol"});
		return;
	}
	else{
		const fullHostname = `${request.protocol}://${request.get('host')}${request.originalUrl}`;
		let userRegisteredStatus = '';
		let emailRegisteredStatus = '';
		try{
			const checkUserResponse = await fetch(`${fullHostname}/usercheck/${user}`);
			const checkEmailResponse = await fetch(`${fullHostname}/emailcheck/${email}`);
			if(!checkUserResponse.ok) {
				throw new Error('Network response was not ok');
			}
			const checkUserResult = await checkUserResponse.json();
			const checkEmailResult = await checkEmailResponse.json();
			userRegisteredStatus = checkUserResult.registered;
			emailRegisteredStatus = checkEmailResult.registered;
		}
		catch (error) {
			response.status(500).json({ error: 'Something went wrong', url: `${fullHostname}` });
			return;
		}
		if(!userRegisteredStatus && !emailRegisteredStatus){
			const mahasiswaSignupQuery = `INSERT INTO mahasiswa(nama, user, pass, email) 
			VALUES('${nama}', '${user}', '${pass}', '${email}')`;
			await connection.query(mahasiswaSignupQuery, (error, result) => {
				if(error){
					response.json({error: error.message});
					return;
				}
				else{
					if(result.affectedRows>0){
						response.json({status: "success"});
					}
					else{
						response.json({status: "fail", message: result});
					}
				}
			});
		}
		else{
			response.json({error: "User with username or email already exist"});
			return;
		}
	}
})

module.exports = mahasiswaSignupRouters;
const express = require('express');
const connection = require('../../core/connection.js');
const filter = require('../../core/filter.js');
const daftarjudulAddRouters = express.Router();


daftarjudulAddRouters.get('/', (request, response) => {
	const session = request.session;
	if(session.loggedIn){
		if(session.roles==='mahasiswa'){
			response.json({status: 'ok', session});
			return;
		}
		else{
			response.json({error: 'only roles mahasiswa'});
			return;
		}
	}
	else{
		response.json({error: 'login first'});
		return;
	}
})
daftarjudulAddRouters.post('/addNew', async (request, response) => {
	const session = request.session;
	const {judul, deskripsi} = request.body;
	if(!session.loggedIn){
		response.json({error: 'login first'});
		return;
	}
	let pengaju = session.userid;
	try{
		if(judul.length===0 || deskripsi.length===0){
			response.json({error: "Can't add empty", input: request.body});
			return;
		}
		else{
			const daftarjudulAddQuery = `INSERT into daftarjudul(judul, deskripsi, tgl_pengajuan, pengaju, status)
			VALUES('${judul}', '${deskripsi}', CURDATE(), ${pengaju}, 'Pending')`;
			await connection.query(daftarjudulAddQuery, (error, result) => {
				if(error){
					response.json({error: error});
					return;
				}
				else{
					if(result.affectedRows>0){
						response.json({status: 'success'});
						return;
					}
					else{
						response.json({status: 'fail'});
						return;
					}
				}
			});
		}
	}
	catch(error){
		response.json({error: error, pengajuan: pengaju});
		return;
	}
})

module.exports = daftarjudulAddRouters;
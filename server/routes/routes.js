const express = require('express');
const connection = require('../core/connection.js');
const filter = require('../core/filter.js');
const APIRouters = express.Router();
const dosenRouters = require('./dosen/dosen-routes.js');
const mahasiswaRouters = require('./mahasiswa/mahasiswa-routes.js');
const daftarjudulRouters = require('./daftarjudul/daftarjudul-routes.js');
const daftarjudulAddRouters = require('./daftarjudul/daftarjudul-add.js');
const dosenAuthRouters = require('./dosen/dosen-auth.js');
const dosenSignupRouters = require('./dosen/dosen-signup.js');
const mahasiswaSignupRouters = require('./mahasiswa/mahasiswa-signup.js');
const mahasiswaAuthRouters = require('./mahasiswa/mahasiswa-auth.js');

APIRouters.use('/dosen', dosenRouters);
APIRouters.use('/mahasiswa', mahasiswaRouters);

APIRouters.use('/daftarjudul', daftarjudulRouters);
APIRouters.use('/daftarjudul-add/', daftarjudulAddRouters);

APIRouters.use('/dosenAuth', dosenAuthRouters);
APIRouters.use('/dosenSignup', dosenSignupRouters);

APIRouters.use('/mahasiswaAuth', mahasiswaAuthRouters);
APIRouters.use('/mahasiswaSignup', mahasiswaSignupRouters);

module.exports = APIRouters;
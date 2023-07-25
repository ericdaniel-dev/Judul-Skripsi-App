const express = require('express');
const APIRouters = require('./routes/routes.js');
const mainRouters = require('./routes/main-routes.js')
const BodyParser = require('body-parser');
const CookieParser = require('cookie-parser');
const session = require('express-session');
const app = express();
const port = 3000;

app.use(CookieParser());
app.use(session({
	secret: 'hush',
	resave: false,
	saveUninitialized: true
}));
app.use(express.json());
app.use(BodyParser.urlencoded({extended: true}));
app.use('/API', APIRouters);
app.use('/', mainRouters);
app.listen(port, ()=>{
	console.log(`Server running on http://localhost:${port}`);
})
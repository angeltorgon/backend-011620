const express = require('express');
const server = express();
const usersRoute = require('./routes/index.js');

server.get('/', (req, res) => {
	res.send('<h1>Welcome to my server!</h1>')
})

server.use('/users', usersRoute);


module.exports = server;

const express = require('express');
const server = express();

server.get('/', (req, res) => {
	res.send('<h1>Welcome to my server!</h1>')
})


module.exports = server;

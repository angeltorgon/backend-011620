const server = require('./server.js');
const port = process.env.PROD_ENV || 5000;

server.listen(port, () => {
	console.log(`Listening on port ${500}`)
})


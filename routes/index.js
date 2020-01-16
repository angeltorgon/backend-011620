const express = require('express');

const usersRoute = express.Router();

usersRoute.get('/', (req, res) => {
    console.log("it's working")
    res.send('It\'s working!');
});

module.exports = usersRoute;


const express = require('express');
const db = require('../data/knexConfig');

const usersRoute = express.Router();

usersRoute.get('/', (req, res) => {
    db('user').then((response) => {
        res.status(201).json(response)
    }).catch((err) => {
        console.log(err)
    })
});

usersRoute.post('/', (req, res) => {
    console.log(req.body)
    db('user')
    .insert(req.body)
    .then((response) => {
        res.status(201).json(response)
    }).catch((err) => {
        console.log(err)
    })
});

module.exports = usersRoute;


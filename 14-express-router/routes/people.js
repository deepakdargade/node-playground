const express = require('express');
const route = express.Router();

route.use((req, res, next) => {
    console.log('people middleware called.');
    next();
});

route.get('/', (req, res) => {
    res.send('welcome from people /');
});

route.get('/example', (req, res) => {
    res.send('welcome from people /example');
});

module.exports = route;
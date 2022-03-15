const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.use('/example', (req, res, next) => {
    req.banana = 'banana';
    console.log(req.method, req.url);
    next();
});

app.get('/', (req, res) => {
    res.send('welcome from /');
});

app.get('/example', (req, res) => {
    console.log(req.banana);
    res.send('welcome from example');
});

app.listen(3000);

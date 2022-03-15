const express = require('express');
const path = require('path');
const app = express();

const people = require('./routes/people');
app.use('/people', people);


app.get('/', (req, res) => {
    res.send('welcome from /');
});

app.listen(3000);

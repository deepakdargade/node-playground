const express = require('express');
const path = require('path');
// const bodyParser = require('body-parser');
// const joi = require('joi');
const app = express();

app.use('/public', express.static(path.join(__dirname, 'static')));
// app.use(bodyParser.json());
app.set('view engine', 'ejs');

app.get('/:userQuery', (req, res) => {
    // res.sendFile(path.join(__dirname, 'static', 'index.html'));
    res.render('index', { data: { userQuery: req.params.userQuery, searchResults: ['book 1', 'book 2', 'book 3'] } });
});

// app.post('/', (req, res) => {
//     const schema = joi.object({
//         email: joi.string().trim().email().required(),
//         password: joi.string().min(5).max(20).required()
//     });
//     const { error, result } = schema.validate({email: req.body[0].value, password: req.body[1].value});
    
//     if(error){
//         console.log(error);
//         res.send('some error occured');
//     } else {
//         console.log(result);
//         res.send('successfully posted data');
//     }
// });

// app.get('/example', (req, res) => {
//     res.send('hitting example route');
// });

// app.get('/example/:name/:age', (req, res) => {
//     console.log(req.params);
//     console.log(req.query);
//     res.send(req.params.name + ' : ' + req.params.age);
// });

app.listen(3000);

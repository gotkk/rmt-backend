const express = require('express')
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express()

mongoose.connect('mongodb://localhost/rmt', { useNewUrlParser: true })
    .then(() => console.log('connection succesful'))
    .catch((err) => console.error(err));

app.use(bodyParser.json());

app.use((_req, res, next) => {
    res.header('Access-Control-Allow-Origin', "http://localhost:8080");
    next();
})

app.get('/', (_req, res) => res.send('this is rmt-backend app!'))

app.use('/tenant', require('./routes/tenant'))

app.listen(3000, () => console.log('rmt-backend app listening on port 3000!'))
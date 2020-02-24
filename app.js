const express = require('express')
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express()

mongoose.connect('mongodb://localhost/te', { useNewUrlParser: true })
    .then(() => console.log('connection succesful'))
    .catch((err) => console.error(err));

app.use(bodyParser.json());

app.use((_req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', "http://localhost:8080");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true); 
    next();
})

app.get('/', (_req, res) => res.send('this is rmt-backend app!'))

app.use('/tenant', require('./routes/tenant'))
app.use('/land', require('./routes/land'))
app.use('/electricity', require('./routes/electricity'))
app.use('/water', require('./routes/water'))
app.use('/contract', require('./routes/contract'))
app.use('/bill', require('./routes/bill'))

app.listen(3000, () => console.log('rmt-backend app listening on port 3000!'))
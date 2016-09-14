'use strict';

const express = require('express');
const parser = require('body-parser');
const pug = require('pug');



// Create a new express app 
var app = express();
app.use(parser.text());
// For html, use: 
app.use(express.static(__dirname + "/../static"));
// For pug, use: app.set('view engine', 'pug');

app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, 'static', 'index.html'));
    // For pug, use: response.render(__dirname + '/../static/pug/index');
});

app.post('/', (request, response) => {
    // The post request handles redirection after form submition
});

var port = Number(process.env.PORT || 3000);
app.listen(port, () => {
    console.log("Running on port 3000");
});

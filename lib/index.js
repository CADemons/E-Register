'use strict';

const express = require('express');
const parser = require('body-parser');

// Create a new express app 
var app = express();
app.use(parser.text());

app.get('/../view/', (request, response) => {
    response.sendFile('index.html');
});

var port = Number(process.env.PORT || 3000);
app.listen(port, () => {
    console.log("Running on port 3000");
});

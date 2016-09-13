'use strict';

const express = require('express');
const parser = require('body-parser');

// Create a new express app 
var app = express();
app.use(parser.text());

app.get('/', (request, response) => {
    response.send("tests");
});

app.listen(80, () => {
    console.log("Running on port 3000");
});

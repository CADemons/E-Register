'use strict';

const express = require('express');
const parser = require('body-parser');

// Create a new express app 
var app = express();
app.use(parser.text());

app.get('/', (request, response) => {
    response.send("tests");
});

var port = Number(process.env.PORT || 3000);
app.listen(port, () => {
    console.log("Running on port 3000");
});

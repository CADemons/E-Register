'use strict';

const express = require('express');
const parser = require('body-parser');

// Create a new express app 
var app = express();
app.use(parser.text());
app.use(express.static(__dirname + "/../static"));

app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, 'static', 'index.html');
});

var port = Number(process.env.PORT || 3000);
app.listen(port, () => {
    console.log("Running on port 3000");
});

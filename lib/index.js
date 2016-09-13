'use strict';

const express = require('express');
const parser = require('body-parser');

// Create a new express app 
var app = express();
app.use(parser.text());

app.get('/../view/index.html', (request, response) => {
    response.sendFile('/../view/index.html');
});

var port = Number(process.env.PORT || 3000);
app.listen(port, () => {
    console.log("Running on port 3000");
});

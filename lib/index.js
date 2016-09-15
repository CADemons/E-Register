'use strict';

const express = require('express');
const parser = require('body-parser');
// For Pug: const pug = require('pug');
const credentials = require('./../client_secret.json');
const sps = require('google-spreadsheet');
const fs = require('fs');
const async = require('async');
const unique = require('array-unique');

const document = new sps('18oJYSx9QqQgOhEp2sANZp9K2zneBHsJ3a2-58v8CkbU');
var sheet;



// Create a new express app 
var app = express();
app.use(parser.urlencoded({extended:true}));
// For html, use: 
app.use(express.static(__dirname + "/../static"));
// For pug, use: app.set('view engine', 'pug');

app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, 'static', 'index.html'));
    // For pug, use: response.render(__dirname + '/../static/pug/index');
});

app.post('/register', (request, response) => {
    // The post request handles redirection after form submition
    async.series([
        function setAuth(step) {
            document.useServiceAccountAuth(credentials, step);
        },
        function gatherData(step) {
            document.getInfo((err, info) => {
                //console.log("Success!\nLoaded Document: " + info.title + ", owned by: " + info.author.email);
                sheet = info.worksheets[0];
                //console.log("Accessed sheet title: " + sheet.title);
                step();
            });
        },
        function rows(step) {
            if (request.body.name === '') 
                return;
            document.addRow(1, {name:request.body.name, email:construct_email(request.body.name)}, (err) => { 
                return "Error at Adding Rows!";
            });
            console.log(request.body.name + " has been added to the list!");
            
        }
    ]);

    response.redirect('back'); 
});

var port = Number(process.env.PORT || 3000);
app.listen(port, () => {
    console.log("Running on port 3000");
});

function construct_email(name) {
    if (name !== '')
        return (name.toLowerCase()).split(' ').join('.') + "@concordacademy.org";
    else 
        return '';
}

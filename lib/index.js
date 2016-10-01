'use strict';

const express = require('express');
const parser = require('body-parser');
// For Pug: const pug = require('pug');
const credentials = require('./../client_secret.json');
const doc_info = require('./../spreadsheetid.json');
const sps = require('google-spreadsheet');
const fs = require('fs');
const async = require('async');
const unique = require('array-unique');
const path = require('path');
const document = new sps(doc_info.id); 

var app = express();
app.use(parser.urlencoded({extended:true})); 
app.use(express.static(__dirname + "/../static"));
// For pug, use: app.set('view engine', 'pug');

app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, 'static', 'index.html'));
    // For pug, use: response.render(__dirname + '/../static/pug/index');
});

app.post('/register', (request, response) => {
    async.series([
        function setAuth(step) {
            document.useServiceAccountAuth(credentials, step);
        },
        function gatherData(step) {
            document.getInfo((err, info) => {
                step();
            });
        },
        function rows(step) {
            if (request.body.name === '') return;
            document.addRow(1, {name:request.body.name, email:construct_email(request.body.name)}, (err) => { 
                return "Error at Adding Rows!";
            });
            console.log(request.body.name + " has been added to the list!");
        }
    ]);
    response.sendFile(path.join(__dirname, '..', 'static', 'anim.html'));
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

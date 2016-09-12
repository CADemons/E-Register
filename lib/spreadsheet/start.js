'use strict';

const fs = require('fs');
const sps = require('google-spreadsheet');
const credentials = require('./../../client_secret.json');

const async = require('async');

const document = new sps('18oJYSx9QqQgOhEp2sANZp9K2zneBHsJ3a2-58v8CkbU');
var sheet;

async.series([
    function setAuth(step) {
        document.useServiceAccountAuth(credentials, step);
    },
    function gatherData(step) {
        document.getInfo((err, info) => {
            console.log("Success!\nLoaded Document: " + info.title + ", owned by: " + info.author.email);
            sheet = info.worksheets[0];
            console.log("Accessed sheet title: " + sheet.title);
        });
    }
]);




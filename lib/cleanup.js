/**
 * Cleanup.js 
 * - Running this file will cause the spreadsheet to check current emails
 *   and correct them
 */
const credentials = require('./../client_secret.json');
const doc_info = require('./../spreadsheetid.json');
const sps = require('google-spreadsheet');
const fs = require('fs');
const async = require('async');
const unique = require('array-unique');
const path = require('path');

const document = new sps(doc_info.id);



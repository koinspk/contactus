var http = require('http');
var express = require('express');
var app = express();
const mongoosedb = require('./db')(app);
app =  mongoosedb;
let rdd = require('./userService')(app)

app.use('/',rdd);
 
 app.listen(3000);
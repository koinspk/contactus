var express = require('express');
var router = express.Router();
var User = require('./User')
var Controller = require('./controller')

var wrapper = function (app) {
    router.get('/user',Controller.insert);
    router.get('/get',Controller.getdata);
    router.get('/createuser',Controller.createuser);
    return router;
}

module.exports = wrapper
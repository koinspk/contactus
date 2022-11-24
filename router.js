var express = require('express');
var router = express.Router();
var Controller = require('./controller')
//var User = require('./User')

router.get('/', Controller);
router.post('/', function(req, res){
   res.send('POST route on things.');
});

//export this router to use in our index.js
module.exports = router;
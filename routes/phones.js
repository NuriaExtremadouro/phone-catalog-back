var express = require('express');
var router = express.Router();

var phones = require('./../db/db');

/* GET phones listing. */
router.get('/', function(req, res, next) {
  res.send(phones);
});

module.exports = router;

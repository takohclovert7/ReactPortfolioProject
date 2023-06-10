var express = require('express');
var router = express.Router();
var projectMdele=require("../models/testiModel");
var mongoose=require("mongoose");

/* GET home page. */
router.get('/', function(req, res) {
  res.json({
    data:"clovert",
  });

});

module.exports = router;

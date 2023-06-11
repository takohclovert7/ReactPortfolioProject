var express = require('express');
var router = express.Router();
var projectMdele=require("../models/testiModel");
var mongoose=require("mongoose");
const nodemailer = require("nodemailer");
/* GET home page. */
router.get('/', function(req, res) {
  res.json({
    data:"clovert",
  });

});

router.get("/sent/me/a/message",function(req,res){



})
module.exports = router;

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('server up an running on port 4000');
});

module.exports = router;

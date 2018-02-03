var express = require('express');
var router = express.Router();
var path = require('path')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('expire.txt', { root: path.join(__dirname, '../public') })
});

module.exports = router;

//https://stackoverflow.com/questions/43787515/making-external-get-request-with-express
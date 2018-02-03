var express = require('express');
var router = express.Router();
var path = require('path')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('expire.txt', { root: path.join(__dirname, '../public') })
});

router.post('/', function(req, res, next) {
  res.send('Yeah I got the request');
  console.log(req.body.photo);
});

module.exports = router;

//https://stackoverflow.com/questions/43787515/making-external-get-request-with-express
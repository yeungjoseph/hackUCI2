var express = require('express');
var router = express.Router();
var path = require('path');
var request = require('request');
var message = require('../public/message.js');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/', function(req, res, next) {
  var requestData = {
    "requests":[
      {
        "image":{
            "content": req.body.img
        },
        "features":[
          {
            "type": "LABEL_DETECTION",
            "maxResults": 10
          }
        ]
      }
    ]
  }
  if (requestData) {
    request.post({
      url: "https://vision.googleapis.com/v1/images:annotate?key=AIzaSyDs5HW2OUYCStIk67GkQ5efoT4zznsPmPw",
      json: requestData
    }, function(err, httpResponse, body) {
      if (err)
        return console.error(err)
      console.log('Upload successful!  Server responded with:', body.responses[0]);
      var response = message.check_expiry(body);
      res.send(response);
      });
  }
});

router.get('/calendar', function(req, res) {
    res.render('calendar');
})

module.exports = router;
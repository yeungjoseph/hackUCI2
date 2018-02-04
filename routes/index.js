var express = require('express');
var router = express.Router();
var path = require('path');
var request = require('request');
var message = require('../public/message.js');


/* GET home page. */
router.get('/test', function(req, res) {
  res.render('test');
})

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
  console.log(requestData);
  if (requestData) {
    request.post({
      url: "https://vision.googleapis.com/v1/images:annotate?key=AIzaSyDs5HW2OUYCStIk67GkQ5efoT4zznsPmPw",
      json: requestData
    }, function(err, httpResponse, body) {
      if (err)
        return console.error(err)
      console.log('Upload successful!  Server responded with:', body.responses[0]);
      var date = message.check_expiry(body);
      res.send(date);
      });
  }
});

module.exports = router;
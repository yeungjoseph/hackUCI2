var express = require('express');
var router = express.Router();
var path = require('path');
var request = require('request');


/* GET home page. */
router.get('/', function(req, res, next) {
  //res.sendFile('expire.txt', { root: path.join(__dirname, '../public') })
  res.render('index');
});

router.post('/', function(req, res, next) {
  //res.send('Yeah I got the request');
  console.log("GOT THIS:");
  console.log(req.body);

  var requestData = {
    "requests":[
      {
        "image":{
            "content":
            "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"
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
  request.post({
      url: "https://vision.googleapis.com/v1/images:annotate?key=AIzaSyDs5HW2OUYCStIk67GkQ5efoT4zznsPmPw",
      json: requestData
  }, function(err, httpResponse, body) {
      if (err)
        return console.error(err)
    console.log('Upload successful!  Server responded with:', body.responses[0]);
  });
});

module.exports = router;

// https://stackoverflow.com/questions/43787515/making-external-get-request-with-express

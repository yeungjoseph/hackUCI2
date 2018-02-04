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

  var requestData = {
    "requests":[
      {
        "image":{
          "source":{
            "imageUri":
            "https://parentinghealthybabies.com/wp-content/uploads/2012/12/apple-16.jpg"
          }
        },
        "features":[
          {
            "type": "LABEL_DETECTION"
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
    console.log('Upload successful!  Server responded with:', body);
    console.log(body.responses[0]);
  });
});

module.exports = router;

// https://stackoverflow.com/questions/43787515/making-external-get-request-with-express

var expire = require("./expiry.js");
var expiry = expire.expiry;

function msg(){
 alert("Hello Javatpoint");
}

function load() {
	var mydata = JSON.parse(data);
  var expiry_dates = JSON.parse(expiry);
	alert(mydata[0].name);
	alert(mydata[0].age);
  alert(expiry_dates[0].Tomato)
  alert(expiry_dates[0].Apple)



  var mylabels = {
    "responses": [
      {
        "labelAnnotations": [
          {
            "mid": "/m/0bt9lr",
            "description": "dog",
            "score": 0.97346616
          },
          {
            "mid": "/m/09686",
            "description": "vertebrate",
            "score": 0.85700572
          },
          {
            "mid": "/m/01pm38",
            "description": "clumber spaniel",
            "score": 0.84881884
          },
          {
            "mid": "/m/04rky",
            "description": "mammal",
            "score": 0.847575
          },
          {
            "mid": "/m/02wbgd",
            "description": "english cocker spaniel",
            "score": 0.75829375
          }
        ]
      }
    ]
  };


  alert(mylabels.responses[0].labelAnnotations[0].description)

  var annots = mylabels.responses[0].labelAnnotations;

  alert(annots.length)


}
exports.check_expiry = function(response)
{
  //var expiry_dates = JSON.parse(expiry);
  var expiry_dates = expiry;
  /*var mylabels = {
    "responses": [
      {
        "labelAnnotations": [
          {
            "mid": "/m/0bt9lr",
            "description": "dog",
            "score": 0.97346616
          },
          {
            "mid": "/m/09686",
            "description": "vertebrate",
            "score": 0.85700572
          },
          {
            "mid": "/m/01pm38",
            "description": "spinach",
            "score": 0.84881884
          },
          {
            "mid": "/m/04rky",
            "description": "mammal",
            "score": 0.847575
          },
          {
            "mid": "/m/02wbgd",
            "description": "english cocker spaniel",
            "score": 0.75829375
          }
        ]
      }
    ]
  };
  var annots = mylabels.responses[0].labelAnnotations;*/
//  alert(annots.length)
  var annots = response.responses[0].labelAnnotations;
  var score = 0;
  var answer = "temp";
  console.log(expiry_dates);
  for(var i=0;i<annots.length;i++)
  {
    //alert(mylabels.responses[0].labelAnnotations[i].description + ' ' +String(mylabels.responses[0].labelAnnotations[i].score))
    var key = response.responses[0].labelAnnotations[i].description;
    var curr_score = response.responses[0].labelAnnotations[i].score;
    console.log(expiry_dates.hasOwnProperty(key));
    if(expiry_dates.hasOwnProperty(key))
    {
      console.log(key + ' exists');
      if(curr_score>score)
      {
        score = curr_score;
        answer = key;
      }

    }
  }

  console.log("Match = " + answer +  " With Score = " + score + " Days: " + expiry_dates[answer]); //Add number of days later
  var my_date = new Date();  //This stores the current Date
  var curr_date = new Date();
  //my_date.setDate (my_date.getDate() + expiry_dates[answer]);
  my_date.setDate (my_date.getDate() + parseInt(expiry_dates[answer]));
  console.log("Date: " + curr_date.toString());
  console.log(String(expiry_dates[answer]));
  //alert("Date: " + String(document.write(my_date)))
  console.log("New Date: " + String(my_date));
  return my_date;
}
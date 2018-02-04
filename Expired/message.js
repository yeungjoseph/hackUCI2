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
function check_expiry()
{
  var expiry_dates = JSON.parse(expiry);
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
  var annots = mylabels.responses[0].labelAnnotations;
//  alert(annots.length)

  var i;
  var score = 0;
  var answer = "temp";
  for(i=0;i<annots.length;i++)
  {
    //alert(mylabels.responses[0].labelAnnotations[i].description + ' ' +String(mylabels.responses[0].labelAnnotations[i].score))
    var key = mylabels.responses[0].labelAnnotations[i].description;
    var curr_score = mylabels.responses[0].labelAnnotations[i].score;
    if(key in expiry_dates[0])
    {
      alert(key + ' exists')
      if(curr_score>score)
      {
        score = curr_score
        answer = key

      }

    }
  }

  alert("Match = " + answer +  " With Score = " + score + "Days: " + String(expiry_dates[0][answer])); //Add number of days later
  var my_date = new Date();  //This stores the current Date
  var curr_date = new Date();
  //my_date.setDate (my_date.getDate() + expiry_dates[0][answer]);
  my_date.setDate (my_date.getDate() + parseInt(expiry_dates[0][answer]));
  alert("Date: " + curr_date.toString())
  alert(String(expiry_dates[0][answer]))
  //alert("Date: " + String(document.write(my_date)))
  alert("New Date: " + String(my_date));

}

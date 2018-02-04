var expire = require("./expiry.js");
var expiry = expire.expiry;


exports.check_expiry = function(response)
{
  var expiry_dates = expiry;

  var annots = response.responses[0].labelAnnotations;
  var score = 0;
  var answer = "temp";
  console.log(expiry_dates);
  for(var i=0;i<annots.length;i++)
  {
    var key = response.responses[0].labelAnnotations[i].description;
    var curr_score = response.responses[0].labelAnnotations[i].score;
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
  var my_date = new Date(); 
  var curr_date = new Date();

  my_date.setDate (my_date.getDate() + parseInt(expiry_dates[answer]));
  console.log("Current Date: " + curr_date.toString());
  console.log("New Date: " + my_date.toString());
  var ret = {
    "date": my_date,
    "name": answer,
    "days": expiry_dates[answer],
  };
  return ret;
}
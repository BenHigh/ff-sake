//routes for api get and post calls for modifying friends.js 
//so front end does not have direct file controll

var friends = require("../data/friends.js");
var path = require("path");


//export as accessible function
module.exports = function(app){
	//simple get list function
	app.get("/list", function(req, res) {
	  res.json(friends);
	});

	//post to list function checks for the closest match and returns the matched object
	//to the call made in survey.html
	app.post("/list", function(req, res) {
		var lowestDiff = 100;
		var match;

		friends.forEach(function(obj){
			console.log(obj.answers);
			var diff = 0;
			for(var i = 0; i < obj.answers.length; i++){
				diff += Math.abs(obj.answers[i] - req.body.answers[i]);
			}
			if(diff < lowestDiff){
				lowestDiff = diff;
				match = obj;
			}
		});

		res.json(match);
		friends.push(req.body);
	});
}


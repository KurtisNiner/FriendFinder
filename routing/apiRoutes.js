var path = require("path");

//link datasourses to the routes
var friends = require("../data/friends.js");

//routing
module.exports = function(app){

    app.get("/api/friends", function(req,res){
        res.json(friends);
        // console.log(data)
    })

    app.post("/api/friends", function(req,res){
        //create a variable to get the incoming data and be able to work with it.
        var results = req.body;
        console.log(results);
        var friend = {
            Name: results.name,
            Photo: results.img,
            Responses: [results.q1,results.q2,results.q3,results.q4,results.q5,results.q6,results.q7,results.q8,results.q9,results.q10],
            Matches: ""
        };
        //add up all the answers to get a total amount
        // for (var i = 0; i < friends.length; i++) {
        //     friend.Score += parseInt(friend.Responses[i]); 
         
        //
        //finds difference in friends answers 
            var maxDifference = 51;

        //then loop through the friend array
            for(var i = 0; i < friends.length; i++){

        //set a variable equal to zero so we can compare
                var scoreDifference = 0;

            //go through the responses that was given by the user 
            //and figure out who would match based on the answers given
                for(var j= 0; j < results.Responses.length; j++){
                    
                    var myScore = parseInt(results.Responses[j]);

                    // console.log(myScore);
                }


            //     var x = parseInt(friend.Responses[j]);
            //     var y = parseInt(friends[i].Responses[j]);
            //     //tells absolute value 
            //     var diff = Math.abs(x - y);

            // friends[i].totalDiff += diff;
            var myScore = parseInt(friend[i].Responses[j]);
            console.log(myScore);

            // }


        }
        //push friend info to the friends json info
        friends.push(friend);
        console.log(friends);
        //trying to figure out the math logic for how to choose the best friend 
        //show their picture
        res.redirect("/api/friends");

        //take information from friends api and do logic to find friend
        
      



        // console.log(JSON.stringify(friendInput));
    })
}
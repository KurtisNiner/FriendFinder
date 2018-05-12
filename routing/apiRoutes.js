var path = require("path");

//link datasourses to the routes
var friends = require("../data/friends.js");

//routing
module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friends);
        // console.log(data)
    })

    app.post("/api/friends", function (req, res) {
        //create a variable to get the incoming data and be able to work with it.
        var results = req.body;
        // console.log(results);
        var friend = {
            Name: results.name,
            Photo: results.img,
            Responses: [results.q1, results.q2, results.q3, results.q4, results.q5, results.q6, results.q7, results.q8, results.q9, results.q10],
        };
        
        //finds difference in friends answers, give a bigger number than possible, so we can compare
        var maxDifference = 100;

        //then loop through the friend array
        for (var i = 0; i < friends.length; i++) {
            // console.log(friends[i].Responses);
            //set a variable equal to zero so we can compare
            var scoreDifference = 0;

            //go through the responses that was given by the user 
            //and figure out who would match based on the answers given by other user
            for (var j = 0; j < friends[i].Responses.length; j++) {

                var myResult = parseInt(friend.Responses[j]);
                // console.log(myScore);

                var friendResult = parseInt(friends[i].Responses[j]);
                // console.log(friendResult);

                //find the absolute value of the difference      
                var resultDifference = Math.abs(myResult - friendResult);

                //score difference plus or equal to resultDifference
                scoreDifference += resultDifference;
            }
            //if the score difference is less thant the max difference that the 
            //match can be, then make that person the match 
            if (scoreDifference < maxDifference) {
 
                maxDifference = scoreDifference;

                //create a variable that shows your match 
                var yourMatch = friends[i];
            }
        }
        //push friend info to the friends json info
        friends.push(friend);
        // console.log(yourMatch);
        
        // res.redirect("/api/friends");
        res.json(yourMatch);

    })
}
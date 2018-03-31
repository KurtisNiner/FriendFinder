var path = require("path");

//link datasourses to the routes
var friends = require("../data/friends.js");

//routing
module.exports = function(app){

    app.get("/api/friends", function(req,res){
        res.json(friendsData);
    })

    app.post("/api/friends", function(req,res){
        var friendInput = req.body;
        //trying to figure out the math logic for how to choose the best friend 
        //show their picture
        console.log(JSON.stringify(friendsData));

    })
}
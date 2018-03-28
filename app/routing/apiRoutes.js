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
        console.log(JSON.stringify(friendsData));

    })
}
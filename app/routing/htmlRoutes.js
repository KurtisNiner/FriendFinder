var path = require("path");

module.exports = function(app){
    //display home page
    app.get("/friends", function(req, res){
        res.sendFile(path.join(__dirname , "../public/home.html"));
    })
    //display surey page
    app.get("/survey", function(req,res){
        res.sendFile(path.join(__dirname ,"../public/survey.html"));
    });
    //default home route
    app.get("/", function(req, res){
        res.sendFile(path.join(__dirname , "../public/home.html"))
    });
}
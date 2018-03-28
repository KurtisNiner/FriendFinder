var path = require("path");

module.exports = function(app){
    //display home page
    app.get("/friends", function(req, res){
        res.sendFile(path.join(_dirname + "../public.home.html"));
    })
    //display surey page
    app.get("/survey", function(req,res){
        res.sendFile(path.join(_dirname + "/..public/survey.html"));
    });
}
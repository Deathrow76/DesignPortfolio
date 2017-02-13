/**
 * Created by Deathrow on 2/13/17.
 */

var express = require("express");
var app     = express();


app.get('/',function(req,res){

    res.sendFile('index.html');

});

app.listen(3000);

console.log("Running at Port 3000");
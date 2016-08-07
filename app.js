var express=require("express");
var bodyParser=require("body-parser");
var app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
var routes=require("./routes.js")(app);
app.use(express.static(__dirname+'/bower_components/bootstrap-toggle'));
var server=app.listen(3001,function(){
console.log("listening on port %s...",server.address().port);
});

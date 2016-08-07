var path=require("path");
var led=require("./blink.js");
var appRouter=function(app){
app.get("/",function(req,res)
{
res.sendFile(path.join(__dirname+'/bower_components/bootstrap-toggle/index.html'));
});
app.get("/on",function(req,res)
{
led.setLedOn();
res.send({"status":"switched on"});
});
app.get("/off",function(req,res)
{
led.setLedOff();
res.send({"status":"switched off"});
});
}

module.exports=appRouter;

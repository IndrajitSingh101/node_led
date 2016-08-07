var wpi=require('wiring-pi');
wpi.wiringPiSetup();

module.exports.setLedOn=function()
{
console.log("in on");
var pin=1;
wpi.pinMode(pin,wpi.OUTPUT);
var value=0;
wpi.digitalWrite(pin,value);
console.log("end on");
};

module.exports.setLedOff=function()
{
console.log("in off");
var pin=1;
wpi.pinMode(pin,wpi.OUTPUT);
var value=1;
wpi.digitalWrite(pin,value);
console.log("end off");
};

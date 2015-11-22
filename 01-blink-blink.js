var http = require("http");
var express = require('express');
var ecstatic = require('ecstatic');
var five = require("johnny-five");

var board = new five.Board()
board.once('ready', function() {

  var led = new five.Led(13);
  var isOn = false;
  this.repl.inject({
    led: led,
		on: function() {
			led.on();
		},
		off:function() {
			led.off();
		},
		toggle: function() {
			led.toggle();
		}
  });

  var app = express();
  app.use(ecstatic({
    root: __dirname
  }));

  app.get('/toggleLed', function(req, res) {
    led.toggle();
    isOn = isOn ? false : true;
    res.write(isOn ? 'ON' : 'OFF');
    res.end();
    console.log('At End ' + isOn);
  });

  http.createServer(app).listen(9000);

});

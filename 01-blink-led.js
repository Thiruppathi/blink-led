var j5 = require('johnny-five');
var board = new j5.Board();

board.on('ready', function(){
  console.log('Board is ready');
  var led = new j5.Led(13);
  this.repl.inject({
    led: led
  });
  led.blink(300);
});

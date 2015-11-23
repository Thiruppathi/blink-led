# Blink LED from Web Interface

Blink an LED in Arudino through a Web Interface.

![Demo](http://i.imgur.com/wBK9K8k.gif)


## Overview
This is a simple demo page uses jQuery, CSS for Showing the LED on Browser screen. Arduino Uno is used for LED.

## How To Install

Check out the project.

```
npm install
```

## Connect your Arduino

![fritzing](http://johnny-five.io/img/breadboard/led-13.png)

As per the above diagram connect LED to 13 and GND.

Connect the arduino to your system through USB.

## How To Play

````
node 02-blink-from-web.js
````

This runs an express js server at node and listens to the port 9000.

Open http://localhost:9000

Click on the Bulb in  your screen. This triggers a toggle action through port 9000 at Arduino LED. Whenever toggle action is triggered at this port LED's state is changed to ON/OFF.

## Play From REPL

REPL - Read Evaluate Print Loop

```
>> on() // will turn on the LED
```


```
>> off() // will turn off the LED
```


```
>> toggle() // will toggle the current status of the LED
```

## Acknowldgements
Thanks to the team [NodeBots of London](http://www.meetup.com/NodeBots-of-London/) for introducing the cool stuff.

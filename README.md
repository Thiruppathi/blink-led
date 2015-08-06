# Blink LED from Web Interface

Blink an LED in Arudino through a Web Interface.

![Demo](http://i.imgur.com/wBK9K8k.gif)


## Overview
This is a simple demo page uses jQuery, CSS for Showing the LED on Browser screen. Arduino Uno is used for LED.

## How To Install

Check out the project. 

## How To Play

Open the blink.html

Click on the Bulb in  your screen. This triggers a toggle action through port 8080 at Arduino LED.


### Arduino - Jhonny Five Implementation


````
node 01-blink-blink.js
````

This runs an express js server at node and listens to the port 8080. Wheneve toggle action is triggered at this port LED's state is changed to ON/OFF.


Credit http://johnny-five.io/examples/

![fritzing](http://johnny-five.io/img/breadboard/led-13.png)





const Keyboard = require('./index'); // Import the keylogger module

const k = new Keyboard('event0'); // Replace 'event3' with your correct event file

k.on('keyup', console.log);
k.on('keydown', console.log);
k.on('keypress', console.log);
k.on('error', console.error);
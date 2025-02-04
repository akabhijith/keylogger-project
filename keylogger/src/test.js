const Keyboard = require('./index'); 

const k = new Keyboard('event0'); // Replace 'event0' with your correct event file

k.on('keyup', console.log);
k.on('keydown', console.log);
k.on('keypress', console.log);
k.on('error', console.error);
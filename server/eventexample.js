const EventEmitter = require('events');
const myEmitter=new EventEmitter();
myEmitter.on('greet',()=>{
    console.log("Hello World");
});
myEmitter.emit("greet");
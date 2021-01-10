var events=require("events");
var evevtEmitter=new events.EventEmitter();

var listener1=function listener1(){
    console.log("listener1");
}

var listener2=function listener2(){
    console.log("listener2");
}

evevtEmitter.addListener('connection',listener1);
evevtEmitter.on('connection',listener2);

var evevntListensers=evevtEmitter.listenerCount("connection");
console.log("listenser number:",evevntListensers);

evevtEmitter.emit('connection');

evevtEmitter.removeListener('connection',listener1);
console.log("remove l1");

evevtEmitter.emit("connection");
evevntListensers=evevtEmitter.listenerCount('connection');
console.log("left number of listenser:",evevntListensers);



var evevnts=require("events");
var emitter=new evevnts.EventEmitter();

emitter.on("someEvent",function(d1,d2){
    console.log(d1,d2);
});

emitter.on("someEvent",function(d1,d2){
   console.log("listener2",d1,d2);
});

emitter.emit("someEvent","112","234");
var express=require("express");
var app=express();

app.get('/',function(req,res){
  res.send("hello express");
});

var server=app.listen(8081,function(){
  console.log(server.address().address,server.address().port);
});
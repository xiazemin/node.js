function Hello(){
    var name;
    this.setName=function(name){
        this.name=name;
    }
    
    this.sayHello=function(){
        console.log("hello:"+this.name);
    }
}

module.exports=Hello;
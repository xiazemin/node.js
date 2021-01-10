function * outer(){
    yield "begin";
    yield inner();
    yield 'end';
}

function * inner(){
    yield 'inner';
}
var it =outer(),v;

console.log(it,"\n");

v=it.next().value;
console.log(v);//begin

v=it.next().value;
console.log(v);//Object [Generator] {}
console.log(v.next().value);//inner

v=it.next().value;
console.log(v);//end

v=it.next().value;
console.log(v);//undefined
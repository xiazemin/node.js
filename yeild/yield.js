function call(){
    console.log('call funtion');
    return new Promise(resolve=>{
        setTimeout(function(){
            console.log('call funtion timeout');
            resolve('dd');
        },1000);        
    });

}
function normalFunction() {
    console.log('normalFunction');
    return 'data'
}
function* yieldFunc() {
    console.log('start');
    yield call();
    yield normalFunction();
    console.log('end');
}
let yieldData=yieldFunc();
let firstData=yieldData.next();
console.log(firstData);
firstData.value.then(function(data){
    console.log(data);
});
yieldData.next();
console.log(yieldData);
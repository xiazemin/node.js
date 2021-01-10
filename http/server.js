var http=require("http");
var url=require("url");
var util=require("util");

function start(route){
    function onRequest(request,response){
        var pathName=url.parse(request.url).pathname;
        console.log("path name:",pathName);

        route(pathName);

        response.writeHead(200,{"Content-Type":"text/plain"});
        response.write("hello world");
        response.write(util.inspect(url.parse(request.url, true).query));
        response.end(util.inspect(url.parse(request.url, true)));
    }
    http.createServer(onRequest).listen(8888);
    console.log("server start");
}

exports.start=start;

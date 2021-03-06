var express = require('express');
var app = express();
var http = require('http');

function startServer () {
    var serverPort = process.env.PORT || 8080;
    http.createServer(app).listen(serverPort, null, null, function(){
        console.log("Listening to http port " + serverPort);
    });
}

startServer();

// index page
app.get('/health', function(req, res) {
    res.sendStatus(200);
    console.log("Funcionando");
});

var http = require('http');
var fs = require('fs');

var PORT = 8080;

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
    fs.readFile(__dirname + "/index.html", function(err, data) {
        if (err) throw err;
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });

    fs.readFile(__dirname + "/assets/css/reset.css", function(err, data) {
        if (err) throw err;
        res.writeHead(200, { "Content-Type": "text/css" });
        res.end(data);
    });

    fs.readFile(__dirname + "/assets/css/style.css", function(err, data) {
        if (err) throw err;
        res.writeHead(200, { "Content-Type": "text/css" });
        res.end(data);
    });
}

server.listen(PORT, function() {
    console.log("Listening on http://localhost:" + PORT);
});
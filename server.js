//first server
var http = require('http');

function onRequest(request, response) {
	resonse.writeHead(200, {"Content_Type: 'text/plain'"});
	reponse.write('Hello World!');
	response.end();
}

http.createServer(onRequest).listen(8000);
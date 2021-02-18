const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) => {
	console.log(request.url.indexOf('svg') != -1);
	if(request.url.indexOf('svg') != -1) {
		response.writeHead(200, {
			'Content-Type': 'image/svg+xml'
		});
	}
	let body = null;
	body = request.url === '/'
		? body = fs.readFileSync('./public_html/index.html')
		: body = fs.readFileSync('./public_html' + request.url);
	console.log(request.url);
	response.end(body);
});

const port = process.env.PORT || 3000;
server.listen(port);

console.log(`Server started on port ${port}`);
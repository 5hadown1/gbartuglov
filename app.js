const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) => {
	if(request.url.indexOf('svg') != -1) {
		response.writeHead(200, {
			'Content-Type': 'image/svg+xml'
		});
	}
	let body = null;
	try {
		body = fs.readFileSync(`./public_html${request.url}`);
	} catch(error) {
		body = fs.readFileSync('./public_html/index.html');
	}
	response.end(body);
});

const port = process.env.PORT || 3000;
server.listen(port);

console.log(`Server started on port ${port}`);
// HTTP server that parses query strings 
const http = require('http'); 
const url = require('url'); 
const server = http.createServer((req, res) => { 
const queryObject = url.parse(req.url, true).query; 
res.writeHead(200, { 'Content-Type': 'text/plain' }); 
res.end(`Hello, ${queryObject.name || 'Guest'}!`); 
}); 
server.listen(3000, () => { 
console.log('Server running at http://localhost:3000/'); 
});
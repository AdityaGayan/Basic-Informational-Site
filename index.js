const http = require('http');
const {readFile} = require('fs').promises;

const server = http.createServer(async(req, res) => {
    if(req.url == '/'){
        const index = await readFile('./index.html');
        res.writeHead(200, {'content-type': 'text/html'})
        res.write(index);
        res.end();
    }
    else if(req.url == '/about'){
        const index = await readFile('./about.html');
        res.writeHead(200, {'content-type': 'text/html'})
        res.write(index);
        res.end();
    }
    else if(req.url == '/contact-me'){
        const index = await readFile('./contact-me.html');
        res.writeHead(200, {'content-type': 'text/html'})
        res.write(index);
        res.end();
    }
    else{
        const index = await readFile('./404.html');
        res.writeHead(404, {'content-type': 'text/html'})
        res.write(index);
        res.end();
    }
})

server.listen(8080);
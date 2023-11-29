const http = require('http');

const server = http.createServer((req, res) => {

    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    const date = new Date();
    const message = `Your vote is accepted: ${date}`
   res.end(message)
})

const port = 3000;

server.listen(port, "127.0.0.1", ()=> {
    console.log("server is running")
})
var http = require("http");
const port = 12345;

console.log(`Before listen`);
console.log(`   Click on the following link: http://localhost:12345/`)

// To log this message, you need type in your browser http://localhost:12345/ 
http.createServer(
    function treatRequest(req, res) {
        console.log(`Inside function`);
        console.log(req);
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Hello World with native http");
    }).listen(port);

console.log(`\nAfter listen`);

// To generate log file: node file.js > file.txt
// On this case, node http.js > httpOutput.txt
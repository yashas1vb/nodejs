let http = require('http');

let server = http.createServer((req,res)=>{
    if(req.url == '/') {
        res.write('<h1>I Am Happy To Learn Full Stack Web Development From PW Skills!');
    }
    res.end();
})

server.listen(5000);

console.log("The http server is running on port 5000!");
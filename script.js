
import http from "http"
const server = http.createServer((ruq, res)=>{
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end("Hello World\n");
})
server.listen(3000, "127.0.0.1", () => {
    console.log("Hello wrold");
    });


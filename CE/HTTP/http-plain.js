const http=require('http');
const server = http.createServer((req,res)=>{
    console.log(req.url);
    res.statusCode=200;
    res.setHeader('Content-Type','text/html');
    res.write("<h1>Modi ji and ronaldo is the goat</h1>");
    res.end();
});
PORT=3000;
server.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
});
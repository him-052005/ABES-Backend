const http=require('http');
const users = [{
    id: 1, name: 'Rahul', email: 'rahul@gmail.com',
}, {
    id: 2, name: 'Raj', email: 'raj@gmail.com',
}, {
    id: 1, name: 'Raju', email: 'raju@gmail.com',
}]

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html'});
    // res.end("<h1>Hello ABES!</h1")
    res.end(JSON.stringify(users))
});

PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
// const server = http.createServer((req,res)=>{
//     res,writeHead(200,{'Content-Type':'text/html'});
//     res.end("<h1>Hello Abes</h1>")
// });
// PORT=3000;
// server.listen(PORT,() =>{
//     console.log(`Server is running on port ${PORT}`);
// })
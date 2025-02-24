import express from 'express';
const app=express();
app.get('/',(request,response)=>{
    response.send("hello ce students");
});
app.get('/api',(request,response)=>{
    const {name='Guest', rollno='100'}=request.query;
    console.log(data)
    response.send(`hello dear ${name} and my roll no. is ${rollno}`);
});
const port=3000;
app.listen(port,() =>{
    console.log(`Server is running at http://localhost:${port}`);
});
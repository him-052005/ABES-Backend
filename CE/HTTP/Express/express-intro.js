import express from 'express';
const app=express();
app.get('/',(request,response)=>{
    response.send("hello ce students");
});
const port=3000;
app.listen(port,() =>{
    console.log(`Server is running at http://localhost:${port}`);
});
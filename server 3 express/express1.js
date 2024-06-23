import express from 'express';

const app = express();

app.get('/',(req,res)=>{
 res.send("this is first page");
});

app.get('/about',(req,res)=>{
    res.send("<h2>This is the about page i want to tell you something </h2> <p>This is called love baby because you are listening very carefully</p>");
});

const port =3000;
app.listen(port,()=>{
    console.log("Server listen at ",port);
})
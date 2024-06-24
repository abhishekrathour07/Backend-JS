import express  from "express";
const app =  express();


app.use(express.static('public'))
const port =3900;

//we can also do it by using chaining

app.get('/',(req,res)=>{
    console.log('This is get request');
    res.send("hello this is get req")
});

// How to use post request
app.post('/test',(req,res)=>{
    console.log("This is post request");
    res.send("POST")
});
// How to use put request
app.put('/test',(req,res)=>{
    console.log('this is put request');
    res.send("Put Update the data")
});

app.listen(port,()=>{
    console.log('Listen at ',port);
})


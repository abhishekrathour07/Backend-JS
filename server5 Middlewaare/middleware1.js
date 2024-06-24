import express from 'express';

const app = express();

app.use(express.static('public'));
const port = 3000;

app.get('/',(req,res)=>{
    res.send("Hello everyone")
});

app.listen(port,()=>{
    console.log(`listen at ${port}`);
})
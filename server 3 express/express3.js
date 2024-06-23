import express from "express";
const app = express();

app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.send(`this is main`);

});
const port = 3000
app.listen(port,()=>{
    console.log(`App listen at ${port}`);
})


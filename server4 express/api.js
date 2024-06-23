const express = require("express");

const app = express();

app.get('/api',(req,res)=>{
    res.json({a:1,b:2,c:3,d:4 ,name:['Abhishek','Singh']})
})
const port = 3000
app.listen(port ,()=>{
    console.log("listen at",port);
})
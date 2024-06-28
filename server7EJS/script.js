import express, { urlencoded } from 'express'
import bodyParser from 'body-parser';
const app = express();
app.use(bodyParser.urlencoded({extended:true}));

const port =3000;

app.get('/',(req,res)=>{
    res.render('index.ejs');
});

app.post('/submit',(req,res)=>{
   const fname = req.body['fName'].length;  
   const lname = req.body['lName'].length;  
   const totalLetter = fname+lname;

    res.render('index.ejs',{numberOfLtr:totalLetter})
});

app.listen(port,()=>{
    console.log(`Listen at http://localhost:${port}`);
});
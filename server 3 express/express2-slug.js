import express from 'express';
const app = express();

app.get('/', (req, res) => {
    res.send("This is home page");
})
app.get('/contact', (req, res) => {
    res.send("This is contact page");
});


// app.get('/contact/contactName',(req,res)=>{
//   res.send("This is contactName page");
// });
// app.get('/contact/contactId',(req,res)=>{
//   res.send("This is contactId");
// });

// Writing same peice of code for every new file is irritative for this we use slug and query.
app.get('/contact/:slug', (req, res) => {

    //for this  http://localhost:3030/contact/hello?color=red&region=india&city=bangalore
   
    console.log(req.params);  //{ slug: 'hello' }
    console.log(req.query); // { color: 'red', region: 'india', city: 'bangalore' } 
    res.send(`This is ${req.params.slug}`);
})

let port = 3030;
app.listen(port, () => {
    console.log(`app listen at ${port}`);
})


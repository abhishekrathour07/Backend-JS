import express from "express";
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    const data = {
        title: "EJS Documentation",
        seconds: new Date().getSeconds(),
        fruits: ['apple', 'banana', 'grapes', 'orange'],
        htmlContent: "<b>This is the html Content</b>",
    }
    res.render('index2.ejs', data);
});


app.listen(port, () => {
    console.log(`app is listening at  http://localhost:${port}`);
});
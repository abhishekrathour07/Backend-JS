import express from "express";
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("Working properly")
})

app.get('/workout', (req, res) => {

    const alldays = ['Sunday', 'Monday', "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"]
    const today = new Date();
    const day = today.getDay()
    const displayDate = alldays[today.getDay()];

    let type = "a working day";
    let adv = "It's time to work Hard";
    if (day === 0 || day === 6) {
        type = 'weekend'
        adv = "It's time to doing fun"
    }
    // render is used for rendering the ejs file to the server 
    res.render("index.ejs", { dayType: type, advice: adv, displayDate });
})

app.listen(port, () => {
    console.log(`Listen at http://localhost:${port}`);
})

const express = require('express');


const app = express();

app.get('/mypage', (req, res) => {
    console.log("this is homepage of mypage.html");
    res.sendFile('/templates/mypage.html',{root:__dirname});
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

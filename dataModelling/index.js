require("dotenv").config()
const express = require("express");
const app = express();
const PORT = process.env.PORT;

app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.get('/login', (req, res) => {
    res.send('Hello login!')
})


app.get('/twitter', (req, res) => {
    res.send('<h1>Twitter is here</h1>')
})


app.listen(PORT, () => {
    console.log(`Server is listen on PORT ${PORT}`);
})


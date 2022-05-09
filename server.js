const express = require("express");
const app = express();

app.post('/', (req, res) => {
    console.log(req);
    res.send('Hello World!');
    console.log('Request handled successfully');
});

app.get('/', (req, res) => {
    console.log(req);
    res.send('Hello World!');
    console.log('Request handled successfully');
});

app.listen(8000, () => {
    console.log('App is running on PORT 8000!');
});
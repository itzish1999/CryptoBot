const express = require("express");
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
    console.log('This is the Home Page.');
});

app.listen(8000, () => {
    console.log('App is running on PORT 8000!');
});
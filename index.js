const express = require('express');
const app = express();
const port = 3000;


app.use(express.json());

app.get('/hello', (req, res) => {
    res.json({ content: 'Hello World'});
});

app.post('/hello', (req, res) => {
    console.log(req.body);
    res.end();
});

app.listen(port, ()=> {
    console.log(`App running and listening at http://localhost:${port}`);
});
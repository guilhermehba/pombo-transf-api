const express = require ('express');

const app = express();

app.get('/', (req, res)=> res.send('Hello Pombo'));

app.listen(process.env.PORT || 3000);
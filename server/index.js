require('dotenv').config();
require('./db/mongoose');
const cors = require('cors');
const express = require('express');
const app = express();
const port = process.env.port;
const User = require('./models/user');

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello');
});

app.listen(port, () => {
    console.log(`Listening to port: ${port}`);
});
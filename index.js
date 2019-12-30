const express = require('express');

const app = express();

// const trainRouters = require('./2.routers/trainRouters');
const userRouters = require('./2.routers/userRouters')

app.use(express.json());

// app.use('/', trainRouters)
app.use('/', userRouters)

app.listen(8000, () => console.log('listening to port 8000'));
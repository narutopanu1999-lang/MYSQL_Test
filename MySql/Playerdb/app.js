
const express = require('express');
const playerRoutes = require('../routes/playerRoutes.js');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Testing /");
});

app.use('/player', playerRoutes);

app.listen(port, () => {
    console.log("Server is running");
});

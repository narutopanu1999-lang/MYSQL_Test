
const express = require('express');
const app = express();
const playerRoutes = require('./routes/playerRoutes.js');


const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Testing /");
});

app.use('/player', playerRoutes);

app.listen(port, () => {
    console.log("Server is running");
});

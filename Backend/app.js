const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Server is running');
});

const start = async function() {
    try {
        app.listen(port, console.log(`Server is listening on ${port}`));
    } catch (error) {
        console.log(error);
    }
}

start();

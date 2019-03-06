const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');

mongoose.connect(keys.mongoURI, { useNewUrlParser: true });

const app = express();

app.get('/', (req, res) => {
    res.send({hello: 'yes'});
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
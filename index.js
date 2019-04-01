const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const keys = require('./config/keys'); //secured keys, .gitignore
const PORT = process.env.PORT || 5000;

//middlewares
app.use(bodyParser.json());
app.use(cors());

app.use(express.static(path.join(__dirname, 'client/build')));

//ROUTES (uses CONTROLLERS AND MODELS)
require('./routes/board.routes')(app);


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});


//connects mongoose to Mongo using ./config/keys.mongoURI
mongoose.connect(keys.mongoURI, { useNewUrlParser: true })
    .then(() => {
        console.log("connected to MongoDB");
    })
    .catch((err) => {
        console.log('ERROR', err);
    })




app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
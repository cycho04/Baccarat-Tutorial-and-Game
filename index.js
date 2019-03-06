const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys'); //secured keys, .gitignore
require('./models/BacBoard');
const Board = mongoose.model('board');


//connects mongoose to Mongo using ./config/keys.mongoURI
mongoose.connect(keys.mongoURI, { useNewUrlParser: true });

const app = express();

app.get('/', (req, res) => {
    res.send({hello: 'yes'});

    //create only 1 record
    Board.findOne({ history: [1,2] })
        .then((existingHistory) => {
            if(existingHistory){
                //If the history was already created...
            }
            else{
                //History has not yet been created. create one
                new Board({history: [1,2]}).save();
            }
        })

    
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
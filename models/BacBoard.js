const mongoose = require('mongoose');
const { Schema } = mongoose;

//mongoose needs to know format ahead of time
const boardSchema = new Schema({
    history: Array
});

//create new collection called board
mongoose.model('board', boardSchema);
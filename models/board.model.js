const mongoose = require('mongoose');
const { Schema } = mongoose;

//mongoose needs to know format ahead of time
const boardSchema = new Schema({
    current: Boolean,
    banker: Array,
    player: Array,
    history: Array,
    deck: Array,
    money: Number
});

//create new collection called board
module.exports = mongoose.model('board', boardSchema);
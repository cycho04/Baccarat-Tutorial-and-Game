const Board = require('../models/board.model');


//CREATE
exports.create = (req, res) => {
    const newBoard = new Board({history: req.body.history})//uses model to create a new Schema
    newBoard.save(); //saves it into the DB
};

//READ. show all
exports.findAll = (req, res) => {
    Board.find()
        .then((board) => {
            res.send(board)
        })
        .catch((err) => {
            res.status(404).send({
                message: err.message || 'Could not make request'
            })
        })
};

//SHOW
exports.findOne = (req, res) => {
    Board.findById(req.params.boardId)//req.params is what is after ./board/ in the axios call. boardId because of routes
        .then((board) => {
            res.send(board)
        })
        .catch((err) => {
            res.status(404).send({
                message: err.message || 'Could not make request'
            })
        })
};

//UPDATE
exports.update = (req, res) => {
    //_id from MongoDB default id. replaces history with new history from axios call(which is req.body)
    Board.findOneAndUpdate({_id: req.params.boardId}, { history: req.body.history }, (err, x) => {
        if(err){
            console.log(err.message)
        }
    })
};

//DESTROY
exports.delete = (req, res) => {
    Board.findOneAndDelete({_id: req.params.boardId}, () => {
        console.log('Entry deleted', req.params.boardId)
    })
};
const Board = require('../models/board.model');


//CREATE uses .post method(where axios is used) info to make a create call
exports.create = (req, res) => {

    const newBoard = new Board({
        //no need to add banker,player,history. blank by default
        current: true,
        history: req.body.history, 
        deck: req.body.deck,
        money: req.body.money
    })
    newBoard.save((err, result) => {
        //sends data (seen in mlab) to front-end/ accessed by .then(res)
        res.send(result);
    }); //saves it into the DB
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
    Board.findOneAndUpdate({_id: req.params.boardId}, { 
        banker: req.body.banker,
        player: req.body.player,
        history: req.body.history,
        deck: req.body.deck,
        money: req.body.money
    })
    //To make sure that the request will not fail, you will need to send at least some response back after the request is complete
    .then(() => {
        res.status(200).send('successfully updated');
    })
};

//DESTROY
exports.delete = (req, res) => {
    Board.findOneAndDelete({_id: req.params.boardId}, () => {
        console.log('Entry deleted', req.params.boardId)
    })
};

//CATCH ALL
exports.all = (res, req) => {
    res.sendFile(path.join(_dirname+'/client/build/index.html'));
};
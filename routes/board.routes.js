module.exports = (app) => {

    const board = require('../controllers/board.controller.js');
    
    //CREATE
    app.post('/board', board.create);

    //READ
    app.get('/board', board.findAll);

    //SHOW
    app.get('/board/:boardId', board.findOne);

    //UPDATE
    app.put('/board/:boardId', board.update);

    //DESTROY
    app.delete('/board/:boardId', board.delete);
}
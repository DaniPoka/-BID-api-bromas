
const JokesController = require('../controllers/jokes.controller');


module.exports = function(app){
    app.post('/api/jokes/new', JokesController.createJokes);
    app.get('/api/jokes',JokesController.getAllJokes);
    app.get('/api/jokes/:id',JokesController.getJokes);
    app.put('/api/jokes/:id',JokesController.updateJokes);
    app.delete('/api/jokes/:id',JokesController.deleteJokes);
}


const mongoose = require('mongoose');


const JokesSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    content: {
        type: String,
    }
})

module.exports.Jokes = mongoose.model('Jokes', JokesSchema);
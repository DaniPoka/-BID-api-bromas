const { Jokes } = require("../models/jokes.model");

module.exports.createJokes = async (request, response) => {
    try {
        const jokes = await Jokes.create(request.body);
        response.json(jokes);
    } catch (error) {
        response.status(400);
        response.json(error);
        console.log(error);
    }
}

module.exports.getAllJokes = async (request, response) => {
    try {
        const jokes = await Jokes.find({})
        response.json(jokes);
    } catch (error) {
        response.status(400);
        response.json(error);
    }
}

module.exports.getJokes = async (request, response) => {
    try {
        const jokes = await Jokes.findOne({_id:request.params.id})
        response.json(jokes);
    } catch (error) {
        response.status(400);
        response.json(error);
        console.log(error);
    }
}

module.exports.updateJokes = async (request, response) => {
    try {
        const jokes = await Jokes.findOneAndUpdate({_id: request.params.id}, request.body, {new:true, runValidators: true })
        response.json(jokes);
    } catch (error) {
        response.status(400);
        response.json(error);
    }
}

module.exports.deleteJokes = async (request, response) => {
    try {
        const jokes = await Jokes.deleteOne({ _id: request.params.id })
        response.json(jokes);
    } catch (error) {
        response.status(400);
        response.json(error);
    }
}
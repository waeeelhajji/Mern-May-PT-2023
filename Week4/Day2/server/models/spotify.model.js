const mongoose = require("mongoose")



const Spotify = new mongoose.Schema({
    singer: {
        type: String
    },
    music: {
        type: String
    },
    views: {
        type: Number
    }
});

module.exports = mongoose.model(Spotify, "Spotify")
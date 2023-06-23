const mongoose = require("mongoose")



const Spotify = new mongoose.Schema({
    singer: {
        type: String,
        required: [true, "the singer name is required"]
    },
    music: {
        type: String,
        required: [true, "music is require"],
        minlength: [3, "minimum of length is 3"]
    },
    views: {
        type: Number
    }
}, { timestamps: true });

module.exports = mongoose.model("Spotify", Spotify)
const mongoose = require("mongoose")





const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is Required"]
    },
    pages: {
        type: Number,
        required: [true, "Pages is Required"],
        min: [5, "Minimum of pages must be greater than 5"],
        max: [500, "maximum of pages must be less than 500"]
    },
    author: {
        type: String,
        required: [true, "Author name is Required"],
        minLength: [3, "min length must be greater than 3"]
    }
}, { timestamps: true })


module.exports.Book = mongoose.model("Book", BookSchema)
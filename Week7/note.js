//! - 1 Create Our Server folder  (cd Server)

//! - 2 Create file server.js --/-- npm init -y

//! - 3 npm express -- Mongoose -- nodemon -- cors

//! - 4  run our server

//! - 5 Create Our Folders Config Controllers Models Routes

//? ---- A- Config : Create mongoose.config.js
const mongoose = require("mongoose")


mongoose.connect("mongodb://localhost/BooksStore")
    .then(() => console.log(`Established  a connection to the database ${mongoose.connection.name}`))
    .catch(err => console.log(`Something went wrong when connecting to the database with this ${err}`));

// ---------------------------------------------------------------------------------------------------------
//? ---- B- Models : Book.model.js

const mongoose = require("mongoose")



const TESTSchema = new mongoose.Schema({
    TEST: {
        type: String,
        required: [true, "Title is Required"]
    },
    TEST: {
        type: Number,
        required: [true, "Pages is Required"],
        min: [5, "Minimum of pages must be greater than 5"],
        max: [500, "maximum of pages must be less than 500"]
    },
    TEST: {
        type: String,
        required: [true, "Author name is Required"],
        minLength: [3, "min length must be greater than 3"]
    }
}, { timestamps: true })


module.exports.TEST = mongoose.model("TEST", TESTSchema)

//? ---- C- Controllers book.controller.js

const { TEST } = require("../models/Book.model")

module.exports.test = (req, res) => {
    res.json("the server Says hello MERN Stack Ninjas")
}

//? ---- D - Routes book.routes.js
const TESTControllers = require("../controllers/book.controller")

module.exports = (app) => {
    app.get("/api/test", TestControllers.test)
}


//? ---- Last step - server.js
app.use(cors(), express.json(), express.urlencoded({ extends: true }))
require("./config/mongoose.config")

require("./routes/book.routes")(app)


//! 6 CRUD test all the Function and check the errors in POSTMEN



/////////////////////////-------------------------------------------------------------------------------------------------///////////////////////////////////////

//! - 1 Create our FrontEnd npx create-react-app client

//! - 2  npm i axios react-router-dom

//!- 3 
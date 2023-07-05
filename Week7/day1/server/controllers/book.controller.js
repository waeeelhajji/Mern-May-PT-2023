const { Book } = require("../models/Book.model")





module.exports.test = (req, res) => {
    res.json("the server Says hello MERN Stack Ninjas")
}


//! -----------------CRUD

//? READ ALL

module.exports.findAllBooks = (req, res) => {

    Book.find()
        .then(AllBooks => {
            console.log(AllBooks)
            res.json(AllBooks)
        })
        .catch(err => { res.json({ message: "wait a minute 😏😏 " }) })

}
//? CREATE
module.exports.createNewBook = (req, res) => {

    Book.create(req.body)
        .then(CreateBook => {
            console.log(CreateBook)
            res.status(200).json({ CreateBook })
        })
        .catch(err => { res.status(400).json({ message: "wait a minute 😏😏 ", err }) })


}
//? findOne

module.exports.getOneBook = (req, res) => {

    Book.findOne({ _id: req.params.b_id })
        .then(OneBook => {
            console.log(OneBook)
            res.json({ OneBook })
        })
        .catch(err => { res.status(400).json({ message: "wait a minute 😏😏 ", error: err }) })

}

//? UPDATE
module.exports.UpdateBook = (req, res) => {
    Book.findOneAndUpdate(
        { _id: req.params.b_id },
        req.body,
        { new: true, runValidators: true }

    )
        .then(UpdatedBook => {
            console.log(UpdatedBook)
            res.json({ UpdatedBook })
        })
        .catch(err => { res.status(400).json({ message: "wait a minute 😏😏 ", error: err }) })

}

//? DELETE
module.exports.DeleteOneBook = (req, res) => {
    Book.deleteOne({ _id: req.params.b_id })
        .then(deleteBook => {
            console.log(deleteBook)
            res.json({ deleteBook })
        })
        .catch(err => { res.status(400).json({ message: "wait a minute 😏😏 ", error: err }) })

}
// ---- Controllers

// CRUD
// this file makes queries to the DB
// using the model
//  so we need to import the (require)
const Spotify = require("../models/spotify.model")


//! -----------------CRUD

//? READ ALL

module.exports.findAllMusic = (req, res) => {
    // db.spotify.find()
    Spotify.find()
        .then(allMusic => {
            console.log(allMusic)
            res.json(allMusic)
        })
        .catch(err => { res.json({ message: "wait a minute 😏😏 " }) })

}
//? CREATE
module.exports.createNewMusic = (req, res) => {
    //db.spotify.insertOne({singer:dffddf})
    Spotify.create(req.body)
        .then(CreateMusic => {
            console.log(CreateMusic)
            res.status(200).json({ CreateMusic })
        })
        .catch(err => { res.status(400).json({ message: "wait a minute 😏😏 ", err }) })


}
//? findOne

module.exports.getOneMusic = (req, res) => {
    //db.spotify.findOne({_id:kdlvhioqfhdfhidfhiohfd})
    Spotify.findOne({ _id: req.params.mid })
        .then(OneMusic => {
            console.log(OneMusic)
            res.json({ OneMusic })
        })
        .catch(err => { res.status(400).json({ message: "wait a minute 😏😏 ", error: err }) })

}

//? UPDATE
module.exports.UpdateNewMusic = (req, res) => {
    Spotify.findOneAndUpdate(
        { _id: req.params.mid },
        req.body,
        { new: true, runValidators: true }

    )
        .then(Updatedmusic => {
            console.log(Updatedmusic)
            res.json({ Updatedmusic })
        })
        .catch(err => { res.status(400).json({ message: "wait a minute 😏😏 ", error: err }) })

}

//? DELETE
module.exports.DeleteOneMusic = (req, res) => {
    Spotify.deleteOne({ _id: req.params.mid })
        .then(deleteMusic => {
            console.log(deleteMusic)
            res.json({ deleteMusic })
        })
        .catch(err => { res.status(400).json({ message: "wait a minute 😏😏 ", error: err }) })

}



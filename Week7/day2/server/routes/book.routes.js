const BookControllers = require("../controllers/book.controller")

module.exports = (app) => {
    app.get("/api/test", BookControllers.test)
    app.get("/api/book", BookControllers.findAllBooks)
    app.get("/api/book/:b_id", BookControllers.getOneBook)
    app.post("/api/book", BookControllers.createNewBook)
    app.put("/api/book/:b_id", BookControllers.UpdateBook)
    app.delete("/api/book/:b_id", BookControllers.DeleteOneBook)
}
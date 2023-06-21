
const SpotifyControllers = require("../controllers/spotify.controller")

console.log(SpotifyControllers)

module.exports = (app) => {
    app.get("/api/music", SpotifyControllers.findAllMusic)
    app.post("/api/music", SpotifyControllers.createNewMusic)
    app.get("/api/music/:mid", SpotifyControllers.getOneMusic)
    app.put("/api/music/:mid", SpotifyControllers.UpdateNewMusic)
    app.delete("/api/music/:mid", SpotifyControllers.DeleteOneMusic)



}
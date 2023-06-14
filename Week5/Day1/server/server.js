const express = require("express")

const app = express()
const PORT = 5001



// --- MIDDLEWARE --

app.use(express.json(), express.urlencoded({ extended: true }))


require("./Config/mongoose.config")
require("./routes/spotify.routes")(app)






app.listen(PORT, () => {
    console.log(`>>>>> Server is running on Prot ${PORT}`)
})

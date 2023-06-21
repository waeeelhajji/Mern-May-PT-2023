const express = require("express")
const cors = require("cors")
const app = express()
const PORT = 5000



// --- MIDDLEWARE --

app.use(express.json(), express.urlencoded({ extended: true }))
// app.use(cors())

// app.use(cors({
//     origin: "localhost:3000",
//     origin: "*",
//     methods:["GET","POST"]
// }))
app.use(cors(), express.json(), express.urlencoded({ extended: true }))
//--------------

require("./Config/mongoose.config")
require("./routes/spotify.routes")(app)






app.listen(PORT, () => {
    console.log(`>>>>> Server is running on Prot ${PORT}`)
})

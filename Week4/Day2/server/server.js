const express = require("express")

const app = express()
const PORT = 5000


// --- MIDDLEWARE --

app.use(express.json(), express.urlencoded({ extended: true }))


require("./Config/mongoose.config")










































app.listen(PORT, () => {
    console.log(`>>>>> Server is running on Prot ${PORT}`)
})

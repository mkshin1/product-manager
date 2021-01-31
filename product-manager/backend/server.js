const mongoose = require("mongoose")
const express = require("express")
const cors = require("cors")

const app = express()
const port = 8001

require('./config/mongoose.config')

app.use(cors())
app.use(express.json())
app.use( express.urlencoded({ extended: true }) )



app.get("/", (req, res) => {
    res.json({message: "hello there! My server is now live!"})
})

const routes = require("./routes/product.routes")
routes(app)

app.listen(port, () => console.log(`listening in port ${port}`))
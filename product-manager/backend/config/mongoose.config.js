const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/product", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("connected!"))
.catch(err => console.log("failed to connect"))


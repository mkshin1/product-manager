const mongoose = require("mongoose")

const productSchema = new mongoose.Schema(
    {
        title: String,
        price: Number,
        desc: String
    }
)

const product = mongoose.model("product-schema", productSchema)

module.exports = product 


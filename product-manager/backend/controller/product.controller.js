const product = require("../models/product.model")

module.exports.findAllProducts = ((req, res) => {
    product.find()
    .then(eachProduct => res.json({ product: eachProduct}))
    .catch(err => res.json({message: "there is an error here"}))
})

module.exports.findOneProduct = ((req, res) => {
    product.findOne({_id: req.params.id})
    .then(oneProduct => res.json({ product: oneProduct}))
    .catch(err => res.json({message: "there is an error here"}))
})

module.exports.createProduct = ((req, res) => {
    product.create(req.body)
    .then(createdProduct => res.json({ product: createdProduct}))
    .catch(err => res.json({message: "there is an error here"}))
})

module.exports.updateProduct = ((req, res) => {
    product.findOneAndUpdate({_id: req.params.id},req.body, {new:true})
    .then(updatedProduct => res.json({ product: updatedProduct}))
    .catch(err => res.json({message: "there is an error here"}))
})


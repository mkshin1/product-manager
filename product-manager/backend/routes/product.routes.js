const productController = require("../controller/product.controller")

module.exports = app => {
    app.get("/api/products", productController.findAllProducts)
    app.get("/api/product/:id", productController.findOneProduct)
    app.post("/api/create", productController.createProduct)
    app.put("/api/update/:id", productController.updateProduct)
}




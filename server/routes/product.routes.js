const ProductController = require("../controllers/product.controller")

module.exports = (app) =>{
    console.log("server=>routes")
    app.get("/api/products", ProductController.allProducts)
    app.get("/api/products/:id", ProductController.oneProduct)
    app.post("/api/products/new", ProductController.createProduct)
    app.put("/api/products/:id", ProductController.updateProduct)
    app.delete("/api/products/:id", ProductController.deleteProduct)
} 
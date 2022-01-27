const Product = require('../models/product.model')

// find all
module.exports.allProducts = (req, res) => {
    console.log("server=>controller")
    Product.find()
        .then(allProducts =>{ 
            console.log("got all products")
            res.json(allProducts)
        })
        .catch(err => res.json({message: "Something went wrong", error: err}))
}

// find one
module.exports.oneProduct = (req, res) => {
    Product.findOne({_id: req.params.id})
    .then(product =>{ 
        console.log("got one product")
        res.json(product)
    })
    .catch(err => res.json({message: "Something went wrong with find one", error: err}))
}

// Create one
module.exports.createProduct = (req, res) => {
    Product.create(req.body)
        .then(newProduct => res.json(newProduct))
        .catch(err => res.json({message: "Something went wrong with create", error: err}))
        // .catch(err => res.json(req.body))
}

// Update one ( find one + create)
module.exports.updateProduct = (req, res) => {
   Product.findOneAndUpdate(
    {_id: req.params.id},
    req.body,
    { new: true, runValidators: true})
    .then(product =>{ 
        console.log("got one product")
        res.json(product)
    })
        .catch(err => res.json({message: "Something went wrong with update", error: err}))
}

// delete one
module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({_id: req.params.id})
    .then(result =>{ 
        console.log("deleted one")
        res.json(result)
    })
    .catch(err => res.json({message: "Something went wrong with delete one", error: err}))

}
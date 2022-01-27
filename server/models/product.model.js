const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    title:{
        type: String,
        required: [true, "title is required"],
        minlength: [3, "title must be at least 3 caracters"]
    },
    price:{
        type: Number,
        min: [0, "price must be greater than 0"],
    },
    description:{
        type: String,
        required: [true, "Description is required"],
        minlength: [3, "Description must be at least 3 caracters"]
    }
}, {timestamp: true})

const Product = mongoose.model("Product", ProductSchema)

module.exports = Product
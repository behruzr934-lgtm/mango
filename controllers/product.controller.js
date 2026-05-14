const Product = require('../models/product.model');


// CREATE
exports.createProduct = async (req, res) => {
    try {

        const product = await Product.create(req.body);

        res.status(201).json(product);

    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};


// GET ALL
exports.getProducts = async (req, res) => {
    try {

        const products = await Product.find();

        res.json(products);

    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};


// DELETE
exports.deleteProduct = async (req, res) => {
    try {

        await Product.findByIdAndDelete(req.params.id);

        res.json({
            message: 'Deleted'
        });

    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};
var express = require('express');

var ProductController= require('../controllers/product.controller');

var productRouter = express.Router();

//http://localhost:9478/admin/addProduct
productRouter.post('/addProduct',ProductController.addProduct);

//http://localhost:9478/admin/allProducts
productRouter.get('/allProducts',ProductController.allProducts);

//http://localhost:9478/admin/productById/
productRouter.get('/productById/:pid',ProductController.productById);

//http://localhost:9478/admin/deleteProduct/
productRouter.delete('/deleteProduct/:pid',ProductController.deleteProduct);

module.exports = productRouter;
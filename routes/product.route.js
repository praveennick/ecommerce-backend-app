var express = require('express');

var ProductController= require('../controllers/product.controller');

var productRouter = express.Router();

//http://localhost:9478/admin/addProduct
productRouter.post('/addProduct',ProductController.addProduct);

//http://localhost:9478/admin/allProducts
productRouter.get('/allProducts',ProductController.allProducts);

//http://localhost:9478/admin/getProductById/
productRouter.get('/getProductById/:id',ProductController.getProductById);

//http://localhost:9478/admin/deleteProduct/
productRouter.delete('/deleteProduct/:id',ProductController.deleteProduct);



module.exports = productRouter;
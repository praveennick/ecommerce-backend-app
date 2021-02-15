var express = require('express');

var ProductController= require('../controllers/product.controller');

var productRouter = express.Router();

//http://localhost:9478/admin/addProduct
productRouter.post('/addProduct',ProductController.addProduct);


module.exports = productRouter;
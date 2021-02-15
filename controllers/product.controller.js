var ProductModel = require('../models/product.model')

exports.addProduct=function(request,response){
    var product = request.body;
    var newProduct = new ProductModel(product);

    newProduct.save(function(err,docs){
        if(err){
            response.send({status:false,message:err.message})
        }
        if(docs._id){
            response.send({status:true,message:"Product added successfully!"});
        }
    })
}
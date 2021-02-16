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

exports.allProducts= function(request,response){
    ProductModel.find({},function(err,docs){
        if(err){
            response.send({error:err.message})
        }else{
            response.send(docs);
        }
    })
}

exports.productById=function(request,response){
    var pid=request.params.pid
    ProductModel.findOne({pid:pid},function(err,docs){
        if(err){
            response.send({err:err.message})
        }else{
            response.send(docs);
        }
    })
}

exports.deleteProduct=function(request,response){
    var pid= request.params.pid;
    ProductModel.deleteOne({pid:pid},function(err,docs){
        if(err){
            response.send({error:err.message})
        }else{
            response.send(docs)
        }
    })
}
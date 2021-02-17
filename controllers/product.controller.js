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

exports.getProductById=function(request,response){
    var pid=request.params.id
    console.log("pid",pid)
    ProductModel.findOne({pid:pid},function(err,docs){
        if(err){
            response.send({err:err.message})
        }
        if(docs){
            response.send(docs)
        }else{
            response.send({message:"product "+pid+" not found!"})
        }
    })
}

exports.deleteProduct=function(request,response){
    var pid= request.params.id;
    ProductModel.deleteOne({pid:pid},function(err,docs){
        if(err){
            response.send({error:err.message,message:"hello"});
            return;
        }
        if(docs){
            if(docs.deletedCount<=0){
                response.send({message:"product "+pid+" not found!"})
            }else{
                response.send({message:"product "+pid+" deleted successfully!"})
            }
            
        }
    })
}

exports.updateProduct=function(request,response){
    var pid= request.params.id;
    var updatedProduct= request.body;
    console.log("request",request,request.body)
    ProductModel.updateOne({pid:pid},updatedProduct,function(err,docs){
        if(err){
            response.send({error:err.message})
        }
        if(docs){
            if(docs.ok<=0){
                response.send({message:"please check the syntax"});
            }else
            if(docs.n<=0){
                response.send({message:"product "+pid+" not found!"})
            }else
            if(docs.nModified<=0){
                response.send({message:"product "+pid+" already updated!"});
            }else
            {
                response.send({message:"product "+pid+" updated successfully!"});
            }
        }
    })
}

exports.getProductByChoice=function(request,response){
    console.log(request.query.choice);
    var choice= request.query.choice;
    switch(choice){
        case "asc": ProductModel.find({}).sort({price:1}).exec(function(error,docs){
            response.send(docs)
        });
        break;

        case "desc":ProductModel.find({}).sort({price:-1}).exec(function(error,docs){
            response.send(docs);
        })
        break;
    }
}
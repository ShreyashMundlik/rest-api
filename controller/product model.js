const mongoose= require('mongoose');
const product= require('../model/product');

exports.createProduct= async(req,res)=>{
    try{
        const product= new Product({
            _id: new mongoose.Types.ObjectId,
            name:req.body.name,
            price:req.body.price
        })

        const data= await product.save();

        res.status(200).json({
            msg: "Product created successfully!",
            product: data
        })
    }
    catch(err){
        res.status(501).json({

            msg:"something went wrong!",
            err:err

        })
    }
}
exports.getProducts= async(req,res)=>{
    try{

        const data= await product.find();

        res.status(200).json({
            msg: "All products fetched successfully!",
            product: data
        })
    }
    catch(err){
        res.status(501).json({

            msg:"something went wrong!",
            err:err

        })
    }
}
exports.getProduct= async(req,res)=>{
    try{

        const data= await product.findById(req.params.productId);

        res.status(200).json({
            msg: "All products fetched successfully!",
            product: data
        })
    }
    catch(err){
        res.status(501).json({

            msg:"something went wrong!",
            err:err

        })
    }
}
exports.deleteProduct= async(req,res)=>{
    try{

        const data= await product.findByIdandDelete(req.params.productId);

        res.status(200).json({
            msg: " product deleted successfully!",
            product: data
        })
    }
    catch(err){
        res.status(501).json({

            msg:"something went wrong!",
            err:err

        })
    }
}
exports.updateProduct= async(req,res)=>{
    try{

        const data= await product.findByIdandUpdate(req.params.productId);

        res.status(200).json({
            msg: " product deleted successfully!",
            product: data
        })
    }
    catch(err){
        res.status(501).json({

            msg:"something went wrong!",
            err:err

        })
    }
}

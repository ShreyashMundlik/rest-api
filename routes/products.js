const express= require('express')
const router= express.Router()
const productController= require('../controller/product model')

//CRUD-->
router.post('/',productController.createProduct)
router.get('/',productController.getProducts)
router.get('/:productId',productController.getProduct)
router.delete('/:productId',productController.deleteProduct)
router.put('/:productId',productController.updateProduct)

module.exports=router
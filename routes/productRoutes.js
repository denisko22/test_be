const express = require("express")
const router = express.Router()
const productController = require('../controllers/productController')



router.route("/")
.get(productController.getProducts)

router.route("/:id")
.get(productController.getOneProduct)

router.route("/")
.post(productController.newProduct)

router.route("/:id")
.put(productController.updateProduct)

router.route("/:id")
.delete(productController.deleteProduct)



module.exports = router
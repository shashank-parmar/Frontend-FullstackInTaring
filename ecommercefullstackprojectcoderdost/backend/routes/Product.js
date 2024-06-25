const express = require("express")
const {createProduct,getProduct,getOneProductById,getOneproductAndDeleteOne,EditOneProduct } = require("../controller/Product")


const router = express.Router()

router.post("/createProduct",createProduct)
router.get("/getProduct",getProduct)
router.get("/getOneProductById/:id",getOneProductById)
router.delete("/getOneproductAndDeleteOne/:id",getOneproductAndDeleteOne)
router.patch("/EditOneProduct/:id",EditOneProduct)

exports.router = router;
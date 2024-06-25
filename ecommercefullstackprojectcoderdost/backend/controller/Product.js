const Product = require("../model/Product");
 const mongoose = require("mongoose")

exports.createProduct = async(req,res)=>{
    const body = req.body;
    const ins = await Product.create({
        name:body.name,
        description:body.description,
        price:body.price,
        discountPercentage:body.discountPercentage,
        rating:body.rating,
        stock:body.stock,
        brand:body.brand,
        category:body.category,
        color:body.color,
        size:body.size,
        imageSrc:body.imageSrc
    })
    console.log(ins)
    res.status(500).json({ message: 'Created  success' });
}

exports.getProduct = async (req, res) => {
    try {
      const products = await Product.find({});
      res.status(200).json(products);
    } catch (error) {
      console.error('Error fetching products:', error);
      res.status(500).json({ message: 'Failed to fetch products' });
    }
  };

  exports.getOneProductById = async (req, res) => {
    const idd = req.params.id;
    const fet = await Product.findById(idd)
    console.log(fet,'lllllllll')
    res.send(fet)
  };
  

  exports.getOneproductAndDeleteOne = async(req,res)=>{
    const id = req.params.id;
    try {
      const deletedProduct = await Product.findOneAndDelete({ _id: id });
      console.log(deletedProduct);
      res.status(200).json({ message: 'Product deleted successfully', deletedProduct });
    } catch (error) {
      console.error('Error deleting product:', error.message);
      res.status(500).json({ message: 'Error deleting product', error: error.message });
    }
  }

  exports.EditOneProduct = async(req,res)=>{
    const id = req.params.id;
    const body = req.body;
    try{
      const edt = await Product.findByIdAndUpdate(id,
        {
          name:body.name,
          description:body.description,
          price:body.price,
          discountPercentage:body.discountPercentage,
          rating:body.rating,
          stock:body.stock,
          brand:body.brand,
          category:body.category,
          color:body.color,
          size:body.size,
          imageSrc:body.imageSrc
        }
      )
      console.log(edt)
      res.send(edt)
    }
    catch(err){
      res.send.json({msg:"error from catch in EditOneProduct Api from backend"})
    }
  }
const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser")
const cors = require("cors")
const session = require("express-session")
const passport = require("passport")
const ProductRouter = require("./routes/Product")
const getProduct = require("./routes/Product")
const getOneProductById = require("./routes/Product")
const getOneproductAndDeleteOne = require("./routes/Product")
const EditOneProduct = require("./routes/Product")
const app = express();

app.use(bodyparser.json())
app.use(express.json());
app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.set('trust proxy', 1) 
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))

mongoose.connect("mongodb://localhost:27017/ecommerce");

const db = mongoose.connection;

app.use('/product',ProductRouter.router )
app.use('/product',getProduct.router)
app.use('/product',getOneProductById.router)
app.use('/product',getOneproductAndDeleteOne.router)
app.use('/product',EditOneProduct.router)

app.listen(9090)
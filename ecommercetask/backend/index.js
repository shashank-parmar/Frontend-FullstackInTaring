const express = require("express")
const db = require("./models/index")
const cors = require('cors');

const User = db.User;
const Card = db.Card;
const bodyParser = require("body-parser")
const {signup,login} = require("./routers/Signup.js")
const {InsertItem,Finditem} = require("./routers/Carditem")

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.post('/',signup)
app.post('/login',login)

app.post('/carditem',InsertItem)
app.post('/finditem',Finditem)

app.listen(3000)
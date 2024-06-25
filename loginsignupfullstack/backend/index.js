const express = require("express")
const db = require("./models/index")
const cors = require('cors');

const User = db.User;
const bodyParser = require("body-parser")
const {signup,login} = require("./routers/Signup.js")

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.post('/',signup)
app.post('/login',login)

app.listen(3000)
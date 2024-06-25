const express = require("express")
const cors = require('cors')
const User = require("./database")

const app = express()

app.use(express.json())
app.use(cors())

app.post('/demo',async(req,res)=>{
    const ins = await User.create({
        username:req.body.username,
        password:req.body.password,
    })
    console.log(req.body)
    res.send(ins)
})
app.listen(3000)
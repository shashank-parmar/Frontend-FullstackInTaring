const { where } = require("sequelize");
const db = require("../models/index")
const User = db.User;

exports.signup = async(req,res)=>{
    const body = req.body;
    const ins = await User.create({
        username:req.body.username,
        email:req.body.email,
        password:req.body.password
    })
    res.send(ins)
}

exports.login = async (req, res) => {
    const body = req.body;
    try {
        const user = await User.findOne({
            where: {
              email: req.body.email
            }
        });
          
        console.log(user, "user");
        if (!user) {
            return res.status(404).send("User not found. Please sign up.");
        }
        if (user.password !== req.body.password) {
            return res.status(401).send("Password is incorrect.");
        }   
        
        console.log(user);
        return res.status(200).send("User found. Login successful.");
    } catch (error) {
        console.error("Error:", error);
        return res.status(500).send("Internal Server Error");
    }
};


  
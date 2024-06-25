const User = require("../model/userModel");

export default isAdmin = async(req,res,next)=>{
    const body = req.body;
    const fnd = await User.findOne({
        role:admin
    })
    if(!fnd){
        res.semnd("not admin found")
    }
    res.send("admin found")
}
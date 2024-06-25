const User = require("../model/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")

exports.registerController = async (req, res) => {
    const body = req.body;
    const saltRounds = 10;
    try {
        const hashpass = await bcrypt.hash(body.password, saltRounds); // Await the hash promise
        console.log(hashpass);
        const ins = await User.create({
            name: body.name,
            email: body.email,
            password: hashpass,
            phone: body.phone,
            address: body.address,
            role: body.role,
        });
        console.log(ins);
        res.send("create success");
    } catch (error) {
        console.error(error);
        res.status(500).send("Error creating user");
    }
};


exports.loginController = async (req, res) => {
    const body = req.body;
    try {
        const fnd = await User.findOne({ email: body.email });
        if (!fnd) {
            return res.status(404).send("Email not found");
        }
        const com = await bcrypt.compare(body.password, fnd.password);
        if (!com) {
            return res.status(401).send("Password not matching");
        }
        const jwtt = jwt.sign({ userId: fnd._id }, 'shashank', { expiresIn: '1y' }); 
        res.send({ token: jwtt });
    } catch (error) {
        console.error(error);
        res.status(500).send("Error during login");
    }
};
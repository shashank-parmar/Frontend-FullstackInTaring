const { where } = require("sequelize");
const db = require("../models/index")
const Card = db.Card;


exports.InsertItem = async(req,res)=>{
    const body = req.body;
    const ins = await Card.create({
        src:req.body.src,
        title:req.body.title,
        alt:req.body.alt,
        size:req.body.size,
    })
    console.log(ins)
    res.send("create success")
}

exports.Finditem = async (req, res) => {
    try {
        const body = req.body;
        console.log(body)
        const bySize = await Card.findAll({
            where: {
                size:body.size
            }
        });
        
        console.log(bySize); 
        
        res.status(200).json(bySize);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

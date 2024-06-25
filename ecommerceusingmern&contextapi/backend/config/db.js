const mongoose = require("mongoose")

const connectDb = async()=>{

    mongoose.connect("mongodb://localhost:27017/merncontextapi")

}

module.exports = connectDb;
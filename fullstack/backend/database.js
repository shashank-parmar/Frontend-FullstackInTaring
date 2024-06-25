const mongoose = require("mongoose");
mongoose
.connect("mongodb://localhost:27017/fullstack")
.then(()=>console.log("db connected"))
.catch((err)=>console.log(err))

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
       
    },
    password: {
        type: String,
       
    }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;



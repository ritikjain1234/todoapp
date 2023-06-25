const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    userName:{
        type:String,
        trim:true,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
});

userSchema.pre("save",  async function(next) {
    // Store hash in your password DB.
    this.password = await bcrypt.hash(this.password,10);
    // console.log(this.password);
    next();
});

const User = new mongoose.model("user",userSchema);

module.exports = User;
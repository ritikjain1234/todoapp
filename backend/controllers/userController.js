const User = require("../models/user");
const bcrypt = require('bcrypt');

const Userlogin = async(req,res)=>{
    try {
        const userData  = await User.findOne({userName : req.body.userName});
        if(userData === null){
            res.status(404).send("user not found");
        }
        const isMatch = await bcrypt.compare(req.body.password,userData.password);
        // console.log(isMatch);
        if(isMatch){
            res.send(userData);
        }else{
            res.status(401).send("password don't matched");
        }
        console.log(userData);
    } catch (error) {
     res.status(400).send(error)   
    }
}

const UserCreate = async(req,res) =>{
    try {
        const userData = await User.create(req.body);
        // console.log(userData);
        
        res.send(userData);
    } catch (error) {
        // console.log(error);
        res.status(400).send(error);
    }
}
module.exports = {Userlogin,UserCreate};
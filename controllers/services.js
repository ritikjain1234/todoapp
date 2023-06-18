const Todoinfo = require("../models/todos");
const mongoose = require("mongoose");

class DotoOpertion{
    constructo (){

    }
    postTodoData = async(req,res)=>{
        try {
           const dataTodo = new Todoinfo(req.body);
           console.log(req.body);
           const postData = await dataTodo.save();
           res.status(201).send(postData);
        } catch (error) {
            res.status(400).send(error)
        }
    }


    getByIdTodoData = async(req,res)=>{
    try {
        const dataTodo = await Todoinfo.findById(req.params.id);
        res.send(dataTodo);
    } catch (error) {
        console.log(error);
    }
}
getAllTodoData = async (req,res) =>{
    try {
        const dataTodo = await Todoinfo.find();
        // console.log(dataTodo);
        let isCompleted = dataTodo.filter(recode=>{
            return recode.isCompleted;
        });
        let incompleted = dataTodo.filter(recode=>{
            return recode.isCompleted == false;
        })
        res.send({isCompleted,incompleted});
    } catch (error) {
        res.send(error)
    }
}
// getTrueData = async (req,res) =>{
//     try {
//         const dataTodo = await Todoinfo.find({isCompleted:"true"});
//         res.send(dataTodo);
//     } catch (error) {
//         res.send(error)
//     }
// }
// getFalseData = async (req,res) =>{
//     try {
//         const dataTodo = await Todoinfo.find({isCompleted:"false"});
//         res.send(dataTodo);
//     } catch (error) {
//         res.send(error)
//     }
// }
// getBothData = async (req,res) =>{
//     try {
//         const dataTodo = await Todoinfo.find({isCompleted:"false"});
//         res.send(dataTodo);
//     } catch (error) {
//         res.send(error)
//     }
// }
patchTodoData = async(req,res)=>{
    try {
        const _id = req.params.id;
        const dataTodo = await Todoinfo.findByIdAndUpdate(_id,req.body,{new:true});
        res.send(dataTodo);
    } catch (error) {
        res.send(error);
    }
}

}

module.exports = new DotoOpertion();
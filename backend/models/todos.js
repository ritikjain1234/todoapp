const mongoose = require("mongoose");

const todoData = new mongoose.Schema({
    task:{
        type:String,
        required:true,
        trim:true
    },
    isCompleted:{
        type:Boolean,
        default:false
    }
});

const Todoinfo = new mongoose.model("todolist",todoData);

module.exports = Todoinfo;
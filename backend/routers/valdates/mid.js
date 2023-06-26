const {joiValdates,joiValdatesPatch,joiValdatesUsercreate} = require("./index");

const middle = (schema)=>{
return async(req,res,next) =>{
    const datajoi = schema.validate(req.body);
    if(datajoi.error){
        res.status(403).send(datajoi);
    }
    else{
        next();
    }
} 
}

const userValdates = (schema) =>{
    return async(req,res,next)=>{
        const userJoi = schema.validate(req.body);
        // console.log(userJoi);
        if(userJoi.error){
            res.status(403).send(userJoi)
        }
        else{
            next();
        }
    }
}

module.exports = {middle,userValdates,joiValdates,joiValdatesPatch,joiValdatesUsercreate};
const joi = require("joi");

const joiValdates = joi.object({
    task:joi.string().required(),
    isCompleted:joi.boolean().optional()
});

const joiValdatesPatch = joi.object({
    task:joi.string().optional(),
    isCompleted:joi.boolean().optional()
}).min(1);

const joiValdatesUsercreate = joi.object({
    userName:joi.string().required().trim(),
    password:joi.string().required()
});

module.exports = {joiValdates,joiValdatesPatch,joiValdatesUsercreate};
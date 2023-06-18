const joi = require("joi");

const joiValdates = joi.object({
    task:joi.string().required(),
    isCompleted:joi.boolean().optional()
});

const joiValdatesPatch = joi.object({
    task:joi.string().optional(),
    isCompleted:joi.boolean().optional()
}).min(1);

module.exports = {joiValdates,joiValdatesPatch};
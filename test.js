

const Joi = require('joi');


const schema = Joi.object().keys({
    username: Joi.string().min(5),
    password: Joi.string().max(2)
});


const result = Joi.validate({ username: 'absss', password: "as" }, schema);


console.log(result);

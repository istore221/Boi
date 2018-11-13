

const Joi = require('joi');


const schema = Joi.object().keys({
    username: Joi.string().min(5),
    password: Joi.string().max(2),
    custom : Joi.object().keys({
        cf1: Joi.string().max(2)
    })
});


const result = Joi.validate({ username: 'absss', password: "as", custom: {
  cf1: 'ass'
}}, schema);


console.log(result);

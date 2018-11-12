const language = require('./language');



module.exports = class{

  constructor(path,type,context) {
    this.path = path; // fieldname
    this.name = "ValidationError";
    this.isBoi = true;
    this.type = type; // type of the validation has failed ex: string.min
    this.baseType = type.split('.')[0];
    this.validator = type.split('.')[1];
    this.message = language.errors[this.baseType][context.options.language][this.validator](context);
    this.context = context; // validation object

  }





};

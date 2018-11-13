const BoiError = require('../../error');
const _ = require('underscore');
const options = require('../../option');


module.exports = class Any{



  constructor() {
    this._type = 'any';
    this._vset = [];
    this._value = null;
    this._field = null;
    this._isValid = false;
    this._errors = [];
    this.options = options._value;
  }

  createError(vtype){

    let context = _.clone(this);
    delete context._errors;

     let e =  new BoiError(this._field,vtype,context);
     this._errors.push(e);
  }

  opts(opts){
    this.options = opts;
    return this;
  }

  field(arg){
    this._field = arg;
    return this;
  }

  val(arg){
    this._value = arg;
    return this;
  }


};

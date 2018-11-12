const BoiError = require('../../error');
const _ = require('underscore');



module.exports = class Any{



  constructor() {
    this._type = 'any';
    this._vset = [];
    this._value = null;
    this._field = null;
    this._isValid = false;
    this._errors = [];
    this.options = null;
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


};

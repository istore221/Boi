const Any = require('../Any');
const _ = require('underscore');
const BoiError = require('../../error');



module.exports = function(){

    class String extends Any {


      constructor() {
        super();
        this._type = 'string';
      }



    

      min(arg){
        this._min = arg;
        this._vset.push("min");
        return this;
      }

      vmin(arg){

        let v = this._value.length >= this._min;
        if(!v){
          let composeE = this.createError("string.min");
          return false;
        }
        return v;
      }

      max(arg){
        this._max = arg;
        this._vset.push("max");
        return this;
      }

      vmax(arg){

        let v = this._value.length <= this._max;
        if(!v){
          let composeE = this.createError("string.max");
          return false;
        }
        return v;


      }

      required(){
        this._required = true;
        this._vset.push("required");
        return this;
      }

      vrequired(){

        let v = !(this._value||'').match(/^\s*$/);
        if(!v){
          let composeE = this.createError("string.required");
          return false;
        }
        return v;


      }


      validate(){

        let checkValid = true;
        let ctx = this;

        _.each(this._vset,function(value, key, obj) {

          checkValid = checkValid && ctx["v"+value]();

        });

        this._isValid = checkValid;

        return this;


      }



    }

    return new String();

};

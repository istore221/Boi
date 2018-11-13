const Any = require('../Any');
const _ = require('underscore');



module.exports = function(){

      class Object extends Any {

        constructor() {
          super();
          this._type = "object";
          this._json = null;
        }


        keys(args){
          this._value = args;
          return this;
        }

        jsonVal(json){
          this._json = json;
          return this;
        }

        validate(){

          let checkValid = true;
          let ctx = this;

          _.each(this._json,function(value, key, obj) {

              let v  = ctx._value[key].field(ctx._field+"."+key).val(value).validate();
              ctx._errors.push(...v._errors);
          });



          return this;
        }

      }

      return new Object();

}

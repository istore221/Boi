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

        build(){
            let ctx = this;
            // do the recursive magic
          _.each(this._json,function(value, key, obj) {

              if(ctx._value[key]._type == "object"){
                  ctx._value[key].field(ctx._field+"."+key).jsonVal(value).build();

              }else{
                ctx._value[key].field(ctx._field+"."+key).val(value);
              }



          });

          return this;
        }

        validate(){


          let ctx = this;


          _.each(this._value,function(value, key, obj) {
              let v  = value.validate();
              ctx._errors.push(...v._errors);

          });



          return this;
        }

      }

      return new Object();

}

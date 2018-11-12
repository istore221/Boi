'use strict';

const _ = require('underscore');




const internals = {
  object:require('./types/object'),
  string:require('./types/string'),
};

internals.validate = function(data,schema,cb){



  let errors = [];

  _.each(data,function(value, key, obj) {

        var validator =   schema[key].opts(schema.options).field(key).val(value).validate();

        if(validator._isValid){
          
        }else{
          errors.push(...validator._errors);
        }



  });

  console.log(errors);

  // if(typeof cb == "function"){
  //   cb(data,schema);
  // }
};



internals.options = function(opts){
  this.options = opts;
}

module.exports = internals;

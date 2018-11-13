'use strict';

const _ = require('underscore');




const internals = {
  object:require('./types/object'),
  string:require('./types/string'),
};

internals.validate = function(data,schema,cb){


  // { error: null,
  //   value: { username: 'absss', password: 'as' },
  //   then: [Function: then],
  //   catch: [Function: catch] }

  let res = {errors:[]};

  _.each(data,function(value, key, obj) {

        var validator =   schema[key].opts(schema.options).field(key).val(value).validate();

        if(validator._isValid){

        }else{
          res.errors.push(...validator._errors);

        }



  });

  if(res.errors.length == 0) delete res.errors;

  res.value = data;


  if(typeof cb == "function"){
    if(res.errors) cb(res,null); else cb(null,res);
  }

  return res;


};



internals.options = function(opts){
  this.options = opts;
}

module.exports = internals;

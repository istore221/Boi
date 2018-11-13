'use strict';

const _ = require('underscore');
const options = require('./option');




const internals = {
  object:require('./types/object'),
  string:require('./types/string')
};

internals.validate = function(data,schema,cb){



  let res = {errors:[]};

  _.each(data,function(value, key, obj) {


        let vobj = schema._value[key].field(key);



        if(vobj._type == "object"){

          let validator  = vobj.jsonVal(value).build().validate();
          

          if(!validator._isValid) res.errors.push(...validator._errors);

        }else{
          let validator = vobj.val(value).validate();
          if(!validator._isValid) res.errors.push(...validator._errors);
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
  options.set(opts);
}

module.exports = internals;

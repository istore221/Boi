const _ = require('underscore');

module.exports.errors = {


  string: {
      eng: {
        required: _.template("<%= _field %>  is required"),
        min: _.template("<%= _field %> length must be at least <%= _min %> characters long"),
        max: _.template("<%= _field %> length must be less than or equal to <%= _max %> characters long")
      }
  }

};

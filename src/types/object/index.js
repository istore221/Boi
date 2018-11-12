


module.exports = function(){

    return  {
      keys: (args) => {
        args.options = this.options;
        return args;
      }
    }
}

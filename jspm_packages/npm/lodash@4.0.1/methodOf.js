/* */ 
var baseInvoke = require('./internal/baseInvoke'),
    rest = require('./rest');
var methodOf = rest(function(object, args) {
  return function(path) {
    return baseInvoke(object, path, args);
  };
});
module.exports = methodOf;

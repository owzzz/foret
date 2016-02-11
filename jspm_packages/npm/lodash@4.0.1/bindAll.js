/* */ 
var arrayEach = require('./internal/arrayEach'),
    baseFlatten = require('./internal/baseFlatten'),
    bind = require('./bind'),
    rest = require('./rest');
var bindAll = rest(function(object, methodNames) {
  arrayEach(baseFlatten(methodNames), function(key) {
    object[key] = bind(object[key], object);
  });
  return object;
});
module.exports = bindAll;

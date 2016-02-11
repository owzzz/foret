/* */ 
var baseCreate = require('./baseCreate'),
    isFunction = require('../isFunction');
function initCloneObject(object) {
  var Ctor = object.constructor;
  return baseCreate(isFunction(Ctor) ? Ctor.prototype : undefined);
}
module.exports = initCloneObject;

/* */ 
var isFunction = require('./isFunction'),
    isObjectLike = require('./isObjectLike'),
    keys = require('./keys'),
    size = require('./size');
function isEmpty(value) {
  return (!isObjectLike(value) || isFunction(value.splice)) ? !size(value) : !keys(value).length;
}
module.exports = isEmpty;

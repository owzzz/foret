/* */ 
var baseIteratee = require('./internal/baseIteratee'),
    isArray = require('./isArray'),
    isObjectLike = require('./isObjectLike'),
    matches = require('./matches');
function iteratee(func) {
  return (isObjectLike(func) && !isArray(func)) ? matches(func) : baseIteratee(func);
}
module.exports = iteratee;
